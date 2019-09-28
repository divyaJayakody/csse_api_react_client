const express = require("express");
const ttableRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys"); // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const TimeTable= require("../../models/TimeTable");
var randomize = require("randomatic");
const didCount = 1;


function generateTid() {
    var length = 7,
        charset = "23456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//=============================================================================
// TIME TABLE - CREATE , GET , UPDATE TIME TABLE LIST
//=============================================================================

/* create ttable . */
ttableRouter.post("/register", (req, res) => {

    //did generation
    const genTid = generateTid();
    console.log(req.body.routeNumber);


    const newTtable = new TimeTable({
        tid: genTid,
        routeNumber: req.body.routeNumber,
        startpoint:req.body.startpoint,
        startArrivalArray: req.body.arrivalArray,
        startDepartArray: req.body.departArray,
        endpoint:req.body.endpoint,
        endArrivalArray: req.body.arrivalArray_,
        endDepartArray: req.body.departArray_
    });

    newTtable.save()
        .then(newTtable => {
            res.status(200).json({
                'Route': 'Route added succesfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding the passenger failed');
        });

});

/* GET all drivers. */
ttableRouter.route('/').get(function (req, res) {
    let param = req.query.rcourse_routeNumber;
   TimeTable.find({})
        .exec(function (err, drivers) {
            if (err) {
                console.log(err);
            } else {
                res.json(drivers)
            }
        });
});

/* get ttable by _id. */
ttableRouter.route('/:id').get(function (req, res) {
   TimeTable.findById(req.params.id, function (err, ttable) {
        if (err) {
            console.log(err);
        } else {
            res.json(ttable)
        }

    });
});


//update ttable by id
ttableRouter.route('/update/:id').post(function (req, res) {
   TimeTable.findById(req.params.id, function (err, ttable) {
        if (!ttable) {
            res.status(404).send("Data is not found");
        } else {

            ttable.did = ttable.did;
            ttable.routeNumber = req.body.routeNumber;
            ttable.dayArray = req.body.dayArray;
            ttable.arrivalArray = req.body.arrivalArray;
            ttable.departArray = req.body.departArray;

            ttable.save().then(ttable => {
                    res.status(200).json('Route updated!');
                })
                .catch(err => {
                    res.status(400).send("Updating failed");
                }).catch(err => {
                    res.status(401).send("Updating failed");
                });

        }

    });
});

/* once confirmed ttable is deleted. */
ttableRouter.route('/remove/:id').delete(function (req, res) {

   TimeTable.findOneAndDelete({
        _id: req.params.id
    }, function (err, res) {
        if (err) {
            console.log(err);
        }
        res.status(200);

    });
});




module.exports = ttableRouter;