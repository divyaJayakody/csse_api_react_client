const express = require("express");
const driverRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys"); // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const Driver = require("../../models/Driver");
var randomize = require("randomatic");
const didCount = 1;

// @route POST api/users/register
// @desc Register user
// @access Public
driverRouter.post("/register", (req, res) => {

            const newDriver = new Driver({
                name: req.body.name,
                address: req.body.address,
                age: req.body.age,
                nic: req.body.nic,
                telephone: req.body.telephone,
                license:req.body.license
            });

            newDriver.save()
             .then(newDriver => {
            res.status(200).json({
                'Driver': 'Driver added succesfully'
            });
            })
             .catch(err => {
                res.status(400).send('Adding the passenger failed');
                });      
                
                /*

                
                
                */                 
 });

 //Developed by Kumara K.B.A.R.T.
 driverRouter.put("/update/driver:id", (req, res) => {

    User.findById(req.params.id, function (err, Driver) {
        if (!Driver) {
            res.status(404).send('Driver Not Found');
        } else {

            Driver.name = req.body.name;
            Driver.telephone = req.body.telephone;
            Driver.nic = req.body.nic;

            Driver.save().then(assign =>{
                res.json('Updated');
            })
                .catch(err => {
                    res.status(400).send('Driver Profile not Updated')
                })


        }

    });
});

module.exports = driverRouter;