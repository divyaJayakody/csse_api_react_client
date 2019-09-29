

 const mongoose = require('mongoose');

 const FareSchema = new mongoose.Schema({
    fid: {
        type: String,   required :true

    },
     routeNo: {
         type: String,   required :true

     },
     distance: {
         type: String,   required :true

     },
     fixedFare: {
         type: String,   required :true

     }

 });

 module.exports = Fare = mongoose.model('fares', FareSchema);
