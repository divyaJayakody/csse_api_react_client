 const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
    {
        pid: {
            type: String,   required :true        
        },
        name: {
            type : String,   required :true
            
        },
        email: {
            type : String,   required :true
            
        },
        password: {
            type : String,   required :true
           
        },
        date: {
            type : Date,
            default : Date.now()
        },
        nic: {
            type: String,   required :true
            
        },
        telephone: {
            type: String,   required :true
             
        }
    }
);

module.exports = Admin = mongoose.model('admins', AdminSchema);


