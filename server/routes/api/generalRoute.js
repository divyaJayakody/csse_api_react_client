const express = require("express");
const generalRouter = express.Router();
const nodemailer = require('nodemailer');
const Route = require("../../models/Route");



function sendPasswordMail(fullName,email) {

    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: " ",
            pass: " "
        }
    });

    const message = {
        from: 'Public Transportation Management System',
        to: email,
        subject: 'Dear User',
        text: 'Welcome  '+fullName+' !: Your inquery has been recieved, we will resolve your inquiry shortly, thank you!'
    };

    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
                    res.status(200).json({
                        'Inquiry': 'Inquery recorded succesfully'
                    });              
        }
    });
}

//=============================================================================
// Inquire - Emailing
//=============================================================================

generalRouter.post("/contact", (req, res) => {

        const mailmess ={
            fullName: req.body.fullName,
            email: req.body.email,
            message:req.body.message,
        }

            sendPasswordMail(mailmess.fullName,mailmess.email);
})

module.exports = generalRouter;