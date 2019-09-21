 const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        pid: {
            type: String,          
        },
        name: {
            type : String,
            
        },
        email: {
            type : String,
            
        },
        password: {
            type : String,
           
        },
        date: {
            type : Date,
            default : Date.now()
        },
        nic: {
            type: String,
            
        },
        telephone: {
            type: String,
             
        },
        accountBal:{
            type:Number,
        }
    }
);

module.exports = User = mongoose.model('users', UserSchema);


