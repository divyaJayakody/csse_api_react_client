const express = require("express");
const busRouter = express.Router();

const Bus = require("../../models/Bus");



function generateBid() {
    var length = 5,
        charset = "23456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//=============================================================================
// BUS - CREATE , GET , UPDATE BUS  LIST
//=============================================================================

/* create bus . */
busRouter.post("/register", (req, res) => {

    //did generation
    const genBid = generateBid();

    const newBus = new Bus({
        bid: genBid,
        busRegNo: req.body.busRegNo,
        busNo: req.body.busNo,
        noOfSeats: req.body.noOfSeats,
        oid: req.body.oid,
    });

    newBus.save()
        .then(newBus => {
            res.status(200).json({
                'Bus': 'Bus added succesfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding the passenger failed');
        });

});

/* GET all drivers. */
busRouter.route('/').get(function (req, res) {
    Bus.find({})
        .exec(function (err, drivers) {
            if (err) {
                console.log(err);
            } else {
                res.json(drivers)
            }
        });
});

/* get bus by _id. */
busRouter.route('/:id').get(function (req, res) {
    Bus.findById(req.params.id, function (err, bus) {
        if (err) {
            console.log(err);
        } else {
            res.json(bus)
             console.log(bus.body);
        }

    });
});


//update bus by id
busRouter.route('/update/:id').post(function (req, res) {
     console.log(req.body.busRegNo);
    Bus.findById(req.params.id, function (err, bus) {
        if (!bus) {
            res.status(404).send("Data is not found");
        } else {
             bus.busRegNo = req.body.busRegNo;
            bus.busNo = req.body.busNo;
            bus.noOfSeats = req.body.noOfSeats;
            bus.oid = req.body.oid;
            bus.save().then(bus => {
                    res.status(200).json('Bus updated!');
                })
                .catch(err => {
                    res.status(400).send("Updating failed");
                }).catch(err => {
                    res.status(401).send("Updating failed");
                });

        }

    });
});

/* once confirmed bus is deleted. */

busRouter.route('/remove/:id').delete(function (req,res) {
    const _id = req.params.id;
    Bus.findOneAndDelete(_id, function (err, res) {
        if (err) {
            console.log(err);
        }
    });
});






module.exports = busRouter;