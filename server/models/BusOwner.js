 const mongoose = require('mongoose');

 const BusOwnerSchema = new mongoose.Schema({


     oid: {
         type: String,   required :true

     },
     name: {
         type: String,   required :true

     },
     address: {
         type: String,   required :true

     },

     telephone: {
         type: String,   required :true

     },

    noOfBuses: {
         type: String,   required :true

     }

 });

 module.exports = BusOwner = mongoose.model('busowners', BusOwnerSchema);
