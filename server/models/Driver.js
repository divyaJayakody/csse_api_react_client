 const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            
        },
        address: {
            type : String,
            
        },
        age: {
            type : String,
           
        },
        nic: {
            type: String,
            
        },
        telephone: {
            type: String,
             
        },
        license:{
            type: String,
        }
    }
);

module.exports = Driver = mongoose.model('drivers', DriverSchema);


