const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({


    rid: {
         type: String,   required :true

    },
    startpoint: {
        type: String,   required :true

    },
    endpoint: {
        type: String,   required :true

    },
    routeNumber: {
        type: String,   required :true

    },
     transitArray: [{
        type: String}
    ]

});

module.exports = Route = mongoose.model('routes', RouteSchema);