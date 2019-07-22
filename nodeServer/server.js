//See https://github.com/elad/node-cluster-socket.io

// entrypoint for our cluster which will make workers
// and the workers will do the Socket.io handling
// Instead of starting the node.js server on that port and listening in each worker, 
// we need to introduce a tiny proxy layer to make sure that connections from the same host end up in the same worker.
// The way to do this is to create a single server listening on port 3000 and consistently map source IP addresses to our workers. 
// We then pass the connection to the worker, which emits a connection event on its server. 
// To prevent data loss where data is sent on the connection before it has been passed to the worker, the server sets the pauseOnConnect option.
// That way, connections are paused immediately and workers can .resume() them to receive data when they're ready. Processing then proceeds as normal:

const express = require('express'),
    cluster = require('cluster'),
    net = require('net'),
    io = require('socket.io'),
    io_redis = require('socket.io-redis'),
    farmhash = require('farmhash');

const port = 3000,
    num_processes = require('os').cpus.length;

if (cluster.isMaster) {
    // This stores our workers. We ned to keep them to be able to reference
    // them based on source IP address. It's also useful for auto-restart
    // for example.
    var workers = [];

    //Helper function for spawning worker at index 'i';
    const spawn = function(i){
        workers[i] = cluster.fork();

        //Optional: Restart worker on exit;
        workers[i].on('exit',(code,signal)=>{
            console.log('Respawning worker: ',i);
            spawn(i);
        })
    }

    //Spawn workers.
    for(let i=0; i<num_processes; i++){
        spawn(i);
    }

    //Helper function for gettnig a worker index based on IP address.
    // This is a hot path so it should be really fast. The way it works
    // is by converting the IP address to a number by removing non numeric
    // characters, then compressing it to the number of slots we have.
    //
    // Compared against "real" hashing (from the sticky-session code) and
    // "real" IP number conversion, this function is on par in terms of worker
    // index distribution only much faster.

    var worker_index = function(ip,len){
        return farmhash.fingerprint32(ip) % len;
    }

    //Create the outside facing server listening on our port:
    var server = net.createServer({pauseOnConnect:true},connection=>{
        // We received a connection and need to pas it to the appropiate
        // worker. Get the worker for this connection's source IP and pass
        // it to the connection
        var worker = workers[worker_index(connection.remoteAddress,num_processes)];
        worker.send('sticky-session:connection', connection)
    }).listen(port);
}else{
    //Child process
    //Echivalent cu !isMaster == isWorker
    // Note we don't use a port here because the master listens on it for us.
    var app = new express();
    // Here you might use middleware, attach routes, etc.

    // Don't expose our internal server to the outside.
	var server = app.listen(0,'localhost'),
    io = io(server);

    // Tell Socket.IO to use the redis adapter. By default, the redis
	// server is assumed to be on localhost:6379. You don't have to
	// specify them explicitly unless you want to change them.
    io.adapter(io_redis({ host: 'localhost', port: 6379 }));
    
    // Here you might use Socket.IO middleware for authorization etc.

    //Listen to messages sent from the master. Ignore everything else.
    process.on('message',(message,connectino)=>{
        if(message !== 'sticky-session:connection'){
            return;
        }

        //Emulate a conection event on the server by emitting the event
        // with the connection the master sent us:

        server.emit('connection',connection);

        //Open connection that was paused at net.createServer({pauseOnConnect:true}) option
        connection.resume();
    })

}