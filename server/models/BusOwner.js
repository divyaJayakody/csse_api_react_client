 const mongoose = require('mongoose');

 const BusOwnerSchema = new mongoose.Schema({


     oid: {
         type: String,

     },
     name: {
         type: String,

     },
     address: {
         type: String,

     },

     telephone: {
         type: String,

     },

    noOfBuses: {
         type: String,

     }

 });

 module.exports = BusOwner = mongoose.model('busowners', BusOwnerSchema);
