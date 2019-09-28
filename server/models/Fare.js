

 const mongoose = require('mongoose');

 const FareSchema = new mongoose.Schema({
    fid: {
        type: String,

    },
     routeNo: {
         type: String,

     },
     distance: {
         type: String,

     },
     fixedFare: {
         type: String,

     }

 });

 module.exports = Fare = mongoose.model('fares', FareSchema);
