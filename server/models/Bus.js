 const mongoose = require('mongoose');

 const BusSchema = new mongoose.Schema({
     bid: {
         type: String,

     },
     busRegNo: {
         type: String,

     },
     busNo: {
         type: String,

     },
     noOfSeats: {
         type: String,

     },
     oid:{
        type: String,
     }
 });

 module.exports = Bus = mongoose.model('buses', BusSchema);
