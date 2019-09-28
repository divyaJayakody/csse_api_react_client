const express = require("express");
const fareRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys"); // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const Fare = require("../../models/Fare");
var randomize = require("randomatic");
const didCount = 1;


function generateFid() {
    var length = 4,
        charset = "23456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//=============================================================================
// FARE - CREATE , GET , UPDATE FARE  LIST
//=============================================================================

/* create fare . */
fareRouter.post("/register", (req, res) => {

    //did generation
    const genFid = generateFid();

    const newFare = new Fare({
        fid: genFid,
        routeNo: req.body.routeNo,
        distance: req.body.distance,
        fixedFare: req.body.fixedFare,
    });

    newFare.save()
        .then(newFare => {
            res.status(200).json({
                'Fare': 'Fare added succesfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding the passenger failed');
        });

});

/* GET all drivers. */
fareRouter.route('/').get(function (req, res) {
    let param = req.query.rcourse_name;
    Fare.find({})
        .exec(function (err, drivers) {
            if (err) {
                console.log(err);
            } else {
                res.json(drivers)
            }
        });
});

/* get fare by _id. */
fareRouter.route('/:id').get(function (req, res) {
    Fare.findById(req.params.id, function (err, fare) {
        if (err) {
            console.log(err);
        } else {
            res.json(fare)
        }

    });
});


//update fare by id
fareRouter.route('/update/:id').post(function (req, res) {
    Fare.findById(req.params.id, function (err, fare) {
        if (!fare) {
            res.status(404).send("Data is not found");
        } else {

            fare.fid = fare.fid;
            fare.routeNo = req.body.routeNo;
            fare.distance = req.body.distance;
            fare.fixedFare = req.body.fixedFare;

            fare.save().then(fare => {
                    res.status(200).json('Fare updated!');
                })
                .catch(err => {
                    res.status(400).send("Updating failed");
                }).catch(err => {
                    res.status(401).send("Updating failed");
                });

        }

    });
});

/* once confirmed fare is deleted. */
fareRouter.route('/remove/:id').delete(function (req, res) {

    Fare.findOneAndDelete({
        _id: req.params.id
    }, function (err, res) {
        if (err) {
            console.log(err);
        }

    });
});




module.exports = fareRouter;