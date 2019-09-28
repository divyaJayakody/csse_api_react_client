const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys"); // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load Admin model
const Admin = require("../../models/Admin");
var randomize  = require("randomatic");


function generatePid() {
    var length = 6,
        charset = "23456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
//=============================================================================
// ADMIN - CREATE , GET , UPDATE BUS ADMIN LIST
//=============================================================================

adminRouter.post("/register", (req, res) => {
    // Form validation
    console.log("Recieved :"+req.body.data)
    const { errors, isValid } = validateRegisterInput(req.body);// Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Admin.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(404).json({
                email: "Email already exists"
            });
        } else {
            //pid generation
            const genPid = generatePid();
            //const newPid = randomize(0, 6)
            const newAdmin = new Admin({
                pid:genPid,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                nic:req.body.nic,
                telephone:req.body.telephone,
            }); 
            // Hash password before saving in database
             bcrypt.genSalt(10, (err, salt) => {
             bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;
                    newAdmin
                        .save()
                        .then(assign => {
                             res.status(200).json({
                                    'Officer': 'Officer added succesfully'
                                });
                            })
                            .catch(err => {
                                res.status(400).send('adding the officer failed');
                            });
                });
            });
        }
    });
});

adminRouter.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);// Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password; // Find user by email
    Admin.findOne({
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
                // Admin matched
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
                                passwordincorrect: "Password correct"
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


/* GET all admins. */
adminRouter.route('/').get(function (req, res) {
    Admin.find({})
        .exec(function (err, admins) {
            if (err) {
                console.log(err);
            } else {
                res.json(admins)
            }
        });
});

/* get admin by _id. */
adminRouter.route('/:id').get(function (req, res) {
    Admin.findById(req.params.id, function (err, admin) {
        if (err) {
            console.log(err);
        } else {
            res.json(admin)
        }

    });
});


//update admin by id
adminRouter.route('/update/:id').post(function (req, res) {
    Admin.findById(req.params.id, function (err, admin) {
        if (!admin) {
            res.status(404).send("Data is not found");
        } else {
            admin.pid = admin.pid;
            admin.name = req.body.name;
            admin.email = req.body.email;
            admin.password = req.body.password;
            admin.nic = req.body.nic;
            admin.telephone = req.body.telephone;

            admin.save().then(admin => {
                    res.status(200).json('Admin updated!');
                })
                .catch(err => {
                    res.status(400).send("Updating failed");
                }).catch(err => {
                    res.status(401).send("Updating failed");
                });

        }

    });
});

/* once confirmed admin-inspector is deleted. */
adminRouter.route('/remove/:id').delete(function (req, res) {

    Admin.findOneAndDelete({
        _id: req.params.id
    }, function (err, res) {
        if (err) {
            console.log(err);
        }
        res.status(200);

    });
});


module.exports = adminRouter;