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
                res.status(400).send('adding the passenger failed');
                });      
                
                /*

                
                
                */                 
 });

module.exports = driverRouter;