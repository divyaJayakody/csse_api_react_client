 const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
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
             
        }
    }
);

module.exports = Admin = mongoose.model('admins', AdminSchema);


