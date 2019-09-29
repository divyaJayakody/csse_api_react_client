 const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema(
    {

         did: {
             type: String,   required :true

         },
        name: {
            type : String,   required :true
            
        },
        address: {
            type : String,   required :true
            
        },
        age: {
            type : String,   required :true
           
        },
        nic: {
            type: String,   required :true
            
        },
        telephone: {
            type: String,   required :true
             
        },
        license:{
            type: String,   required :true
        }
    }
);

module.exports = Driver = mongoose.model('drivers', DriverSchema);


