const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Machine = new Schema({
    macA: String,
    cpuLoad: Number,
    freeMem: Number,
    totalMem: Number,
    usedMem: Number,
    memUsage: Number,
    osType: String,
    upTime: Number,
    cpu: {
        model: String,
        cores: Number,
        speed: Number,
        load: Number,
    },
    isActive: String
})

module.exports = mongoose.model('Machine',Machine)