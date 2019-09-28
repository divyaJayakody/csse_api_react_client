const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys"); // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const User = require("../../models/User");
var randomize = require("randomatic");

// @route POST api/users/register
// @desc Register user
// @access Public
userRouter.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);// Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                email: "Email already exists"
            });
        } else {
            //const newPid = randomize(0, 6)
            const newUser = new User({
                pid: 001,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                nic: req.body.nic,
                telephone: req.body.telephone,
                accountBal: 2500
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(assign => {
                            res.status(200).json({
                                'Passenger': 'Passenger added succesfully'
                            });
                        })
                        .catch(err => {
                            res.status(400).send('adding the passenger failed');
                        });
                });
            });
        }
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
userRouter.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);// Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password; // Find user by email
    User.findOne({
        email
    }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({
                emailnotfound: "Email not found"
            });
        } // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                }; // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey, {
                    expiresIn: 31556926 // 1 year in seconds
                },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                        res.status(200)
                            .json({
                                passwordincorrect: "Password incorrect"
                            });

                    }
                );
            } else {
                return res
                    .status(400)
                    .json({
                        passwordincorrect: "Password incorrect"
                    });
            }
        });
    });
});
//Developed by Kumara K.B.A.R.T.
userRouter.put("/update/user:id", (req, res) => {

    User.findById(req.params.id, function (err, User) {
        if (!User) {
            res.status(404).send('User Not Found');
        } else {

            User.name = req.body.name;
            User.telephone = req.body.telephone;
            User.nic = req.body.nic;

            User.save().then(assign =>{
                res.json('Updated');
            })
                .catch(err => {
                    res.status(400).send('User Profile not Updated')
                })


        }

    });
});

module.exports = userRouter;