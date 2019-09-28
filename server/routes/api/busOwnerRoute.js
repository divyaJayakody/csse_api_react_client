const express = require("express");
const ownerRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys"); // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const Owner = require("../../models/BusOwner");
var randomize = require("randomatic");
const didCount = 1;


function generateOid() {
    var length = 4,
        charset = "23456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//=============================================================================
// BUS OWNER - CREATE , GET , UPDATE BUS OWNER LIST
//=============================================================================

/* create bus owner . */
ownerRouter.post("/register", (req, res) => {

    //did generation
    const genOid = generateOid();

    const newOwner = new Owner({
        oid: genOid,
        name: req.body.name,
        address: req.body.address,
        telephone: req.body.telephone,
        noOfBuses: req.body.noOfBuses
    });

    newOwner.save()
        .then(newOwner => {
            res.status(200).json({
                'Owner': 'Owner added succesfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding the owner failed');
        });

});

/* GET all owners. */
ownerRouter.route('/').get(function (req, res) {
    Owner.find({})
        .exec(function (err, owners) {
            if (err) {
                console.log(err);
            } else {
                res.json(owners)
            }
        });
});

/* get owner by _id. */
ownerRouter.route('/:id').get(function (req, res) {
    Owner.findById(req.params.id, function (err, owner) {
        if (err) {
            console.log(err);
        } else {
            res.json(owner)
        }

    });
});


//update owner by id
ownerRouter.route('/update/:id').post(function (req, res) {
    Owner.findById(req.params.id, function (err, owner) {
        if (!owner) {
            res.status(404).send("Data is not found");
        } else {

            owner.oid = owner.oid;
            owner.name = req.body.name;
            owner.address = req.body.address;
            owner.telephone = req.body.telephone;
            owner.noOfBuses = req.body.noOfBuses;

            owner.save().then(owner => {
                    res.status(200).json('Owner updated!');
                })
                .catch(err => {
                    res.status(400).send("Updating failed");
                }).catch(err => {
                    res.status(401).send("Updating failed");
                });

        }

    });
});

/* once confirmed owner is deleted. */
ownerRouter.route('/remove/:id').delete(function (req, res) {

    Owner.findOneAndDelete({
        _id: req.params.id
    }, function (err, res) {
        if (err) {
            console.log(err);
        }
        res.status(200);

    });
});




module.exports = ownerRouter;