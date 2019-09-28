const express = require("express");
const routeRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys"); // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const Route = require("../../models/Route");
var randomize = require("randomatic");
const didCount = 1;


function generateRid() {
    var length = 7,
        charset = "23456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//=============================================================================
// ROUTE - CREATE , GET , UPDATE BUS ROUTE LIST
//=============================================================================

/* create route . */
routeRouter.post("/register", (req, res) => {

    //did generation
    const genRid = generateRid();

    const newRoute= new Route({
        rid: genRid,
        startpoint: req.body.startpoint,
        endpoint: req.body.endpoint,
        routeNumber: req.body.routeNumber,
        transitArray: req.body.transitArray,
    });

    newRoute.save()
        .then(newRoute=> {
            res.status(200).json({
                'Route': 'Route added succesfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding the passenger failed');
        });

});

/* GET all drivers. */
routeRouter.route('/').get(function (req, res) {
    let param = req.query.rcourse;
    Route.find({})
        .exec(function (err, drivers) {
            if (err) {
                console.log(err);
            } else {
                res.json(drivers)
            }
        });
});

/* get route by _id. */
routeRouter.route('/:id').get(function (req, res) {
    Route.findById(req.params.id, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            res.json(route)
        }

    });
});


//update route by id
routeRouter.route('/update/:id').post(function (req, res) {
    Route.findById(req.params.id, function (err, route) {
        if (!route) {
            res.status(404).send("Data is not found");
        } else {

            route.rid = route.rid;
            route.startpoint = req.body.startpoint;
            route.endpoint = req.body.endpoint;
            route.routeNumber = req.body.routeNumber;
            route.transitArray = req.body.transitArray;


            route.save().then(route => {
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

/* once confirmed route is deleted. */
routeRouter.route('/remove/:id').delete(function (req, res) {

    Route.findOneAndDelete({
        _id: req.params.id
    }, function (err, res) {
        if (err) {
            console.log(err);
        }
        res.status(200);

    });
});




module.exports = routeRouter;