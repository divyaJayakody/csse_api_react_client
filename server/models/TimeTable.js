const mongoose = require('mongoose');

const TTableSchema = new mongoose.Schema({


    tid: {
        type: String,   required :true

    },
    routeNumber: {
        type: String,   required :true

    },
     startpoint: {
         type: String,   required :true

     },
    startArrivalArray: [{
        type: String,   

    }],
    startDepartArray: [{
        type: String
    }],
    endpoint: {
          type: String,   required :true

    },

    endArrivalArray: [{
        type: String,   

    }],
    endDepartArray: [{
        type: String
    }],
});

module.exports = TTable = mongoose.model('ttables', TTableSchema);