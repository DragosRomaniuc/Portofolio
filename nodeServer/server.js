//See https://github.com/elad/node-cluster-socket.io

// entrypoint for our cluster which will make workers
// and the workers will do the Socket.io handling
// Instead of starting the node.js server on that port and listening in each worker, 
// we need to introduce a tiny proxy layer to make sure that connections from the same host end up in the same worker.
// The way to do this is to create a single server listening on port 3000 and consistently map source IP addresses to our workers. 
// We then pass the connection to the worker, which emits a connection event on its server. 
// To prevent data loss where data is sent on the connection before it has been passed to the worker, the server sets the pauseOnConnect option.
// That way, connections are paused immediately and workers can .resume() them to receive data when they're ready. Processing then proceeds as normal:

const express = require('express');
const cluster = require('cluster');
const net = require('net');
const sio = require('socket.io');
const socketMain = require('./socketMain');
const io_redis = require('socket.io-redis');
const farmhash = require('farmhash');
const helmet = require('helmet');

const port = 8181;
const num_processes = require('os').cpus().length;
console.log(num_processes)

    // console.log("asd")
if (cluster.isMaster) {
    // console.log('asd')
    // This stores our workers. We ned to keep them to be able to reference
    // them based on source IP address. It's also useful for auto-restart
    // for example.
    let workers = [];

    //Helper function for spawning worker at index 'i';
    let spawn = function(i) {
        workers[i] = cluster.fork();

        //Optional: Restart worker on exit;
        workers[i].on('exit',(code,signal)=>{
            // console.log('Respawning worker: ',i);
            spawn(i);
        })
    }
    //Spawn workers.
    for(let i=0; i < num_processes; i++){
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

    const worker_index = function(ip, len) {
        return farmhash.fingerprint32(ip) % len;
    }

    //Create the outside facing server listening on our port:
    const server = net.createServer({ pauseOnConnect: true}, (connection) => {
        // We received a connection and need to pas it to the appropiate
        // worker. Get the worker for this connection's source IP and pass
        // it to the connection
        let worker = workers[worker_index(connection.remoteAddress, num_processes)];
        worker.send('sticky-session:connection', connection)
    });
    server.listen(port);
    console.log(`Masterlistening on port ${port}`)

} else {
    //Child process
    //Echivalent cu !isMaster == isWorker
    // Note we don't use a port here because the master listens on it for us.
    let app = express();
    // Here you might use middleware, attach routes, etc.
    app.use(helmet());

    // Don't expose our internal server to the outside.
    const server = app.listen(0, 'localhost');
    
    const io = sio(server);

    // Tell Socket.IO to use the redis adapter. By default, the redis
	// server is assumed to be on localhost:6379. You don't have to
	// specify them explicitly unless you want to change them.
    io.adapter(io_redis({ host: 'localhost', port: 6379 }));
   
    // Here you might use Socket.IO middleware for authorization etc.
    //on connection send the socket over to our module with socket stuff;
    io.on('connection', function(socket){
        socketMain(io,socket);
        console.log(`Connected to worker ${cluster.worker.id}`)
    });

    //Listen to messages sent from the master. Ignore everything else.
    process.on('message',function(message,connection){
        if(message !== 'sticky-session:connection'){
            return;
        }

        //Emulate a conection event on the server by emitting the event
        // with the connection the master sent us:

        server.emit('connection',connection);

        //Open connection that was paused at net.createServer({pauseOnConnect:true}) option
        connection.resume();
    });

}