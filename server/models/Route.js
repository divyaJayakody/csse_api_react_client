const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({


    rid: {
         type: String,

    },
    startpoint: {
        type: String,

    },
    endpoint: {
        type: String,

    },
    routeNumber: {
        type: String,

    },
     transitArray: [{
        type: String}
    ]

});

module.exports = Route = mongoose.model('routes', RouteSchema);