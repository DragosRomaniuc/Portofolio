function socketMain(io, socket){
    console.log("Someone called me! I'm socket main");
    console.log(process.pid);
}

module.exports = socketMain;