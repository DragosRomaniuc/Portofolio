const mongoose = require('mongoose');
const Machine = require('./models/Machine')
mongoose.connect('mongodb://127.0.0.1/perfData', { useNewUrlParser: true });
function socketMain(io, socket){
    console.log("Someone called me! I'm socket main");
    console.log(socket.id);

    socket.on('clientAuth',key=>{
        if(key === 'asd1234asd1234asd'){
            //valid nodeClient
            socket.join('clients');
        }else if(key === "asd5asd5asd5" ){
            //valid ui has joined;
            socket.join('ui');
        } else {
            // an invalid client has joined. Goodbye
            socket.disconnect(true);
        }

    })


    //A machine has connected, check to see if it's new, if it is, add it.
    socket.on('initPerfData',data=>{
        console.log("initPerfData",data)
        macA = data.macA;
        checkAndAdd(data);
    })

    socket.on('perfData',data=>{
        console.log(data);
    })
}

function checkAndAdd(data) {
    return new Promise((resolve,reject)=>{
        Machine.findOne({
            macA: data.macA
        },(err,doc)=>{
            if(err) {
                reject(err);
            } else if(doc === null) {

                //doc not in DB, add it
                let newMachine = new Machine(data);
                newMachine.save();
                resolve('added');
            }else{
                resolve('found');
            }
        })
    })
}

module.exports = socketMain;