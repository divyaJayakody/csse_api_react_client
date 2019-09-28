const mongoose = require('mongoose');

const TTableSchema = new mongoose.Schema({


    tid: {
        type: String,

    },
    routeNumber: {
        type: String,

    },
     startpoint: {
         type: String,

     },
    startArrivalArray: [{
        type: String,

    }],
    startDepartArray: [{
        type: String
    }],
    endpoint: {
          type: String,

    },

    endArrivalArray: [{
        type: String,

    }],
    endDepartArray: [{
        type: String
    }],
});

module.exports = TTable = mongoose.model('ttables', TTableSchema);