const mongoose = require('mongoose');

const Machine = require('./models/Machine')

mongoose.connect('mongodb://127.0.0.1/perfData', { useNewUrlParser: true });
let macA;
function socketMain(io, socket){
    console.log("Someone called me! I'm socket main");
    console.log(socket.id);
    // io.to('ui').emit('')
    socket.on('clientAuth',key=>{
        if(key === 'authkey1234authkey'){
            //valid nodeClient
            socket.join('clients');
            socket.on('disconnect',()=>{
                Machine.find({macA:macA},(err,data)=>{
                    if(data.length > 0){
                        data[0].isActive = false;
                        io.to('ui').emit('data',data[0]);
                    }
                   
                    
                })
             })
        }else if(key === "authkeyclient" ){
            //valid ui has joined;
            console.log('socket.id',socket.id,'JOINEEd')
            socket.join('ui');
            Machine.find({},(err,data) => {
                data.forEach(aMachine => {
                    aMachine.isActive = false;
                    socket.emit('data',aMachine)
                    console.log(aMachine,'amachine is')
                })
                // console.log('data',data)
            })
            // console.log('toSend',toSend)
            // socket.emit('data',toSend)
           
        } else {
            // an invalid client has joined. Goodbye
            socket.disconnect(true);
        }

    })

    


    //A machine has connected, check to see if it's new, if it is, add it.
    socket.on('initPerfData',async data=>{
        console.log("initPerfData",data)
        macA = data.macA;
        const checkData = await checkAndAdd(data);
        // if(checkData.status==='added'){
        //     io.to('ui').emit('updateMachines',checkData.machine);
        // }
        // io.to('ui')
    })


    socket.on('perfData',data=>{
        // console.log(data);
        //SEND TO REACT UI
        io.to('ui').emit('data',data);
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
                let dataToSend = {status:'added',machine:newMachine}
                resolve(dataToSend);
            }else{
                resolve('found');
            }
        })
    })
}

function getMachineList(){
    return new Promise((resolve,reject)=>{
        Machine.find({},(err,data) => {
            if(err) reject(data);
            data.forEach(aMachine => {
                aMachine.isActive = false;
            })
            resolve(data);
        })
    })
}

module.exports = socketMain;