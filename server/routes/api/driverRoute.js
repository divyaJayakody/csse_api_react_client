const express = require("express");
const driverRouter = express.Router();
const Driver = require("../../models/Driver");



function generateDid() {
    var length = 7,
        charset = "23456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//=============================================================================
// BUS DRIVER - CREATE , GET , UPDATE BUS DRIVER LIST
//=============================================================================

/* create driver . */
driverRouter.post("/register", (req, res) => {

            //did generation
            const genDid = generateDid();

            const newDriver = new Driver({
                did:genDid,
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
               
 });

/* GET all drivers. */
driverRouter.route('/').get(function (req, res) {
    let param = req.query.rcourse_name;
    Driver.find({})
    .exec(function (err, drivers) {
        if (err) {
            console.log(err);
        } else {
            res.json(drivers)
        }
    });
});

/* get driver by _id. */
driverRouter.route('/:id').get(function (req, res) {
    Driver.findById(req.params.id, function (err, driver) {
        if (err) {
            console.log(err);
        } else {
            res.json(driver)
        }

    });
});


//update driver by id
driverRouter.route('/update/:id').post(function (req, res) {
    Driver.findById(req.params.id, function (err, driver) {
        if (!driver) {
            res.status(404).send("Data is not found");
        } else {

            driver.did = driver.did;
            driver.name = req.body.name;
            driver.address = req.body.address;
            driver.age = req.body.age;
            driver.nic = req.body.nic;
            driver.telephone = req.body.telephone;
            driver.license = req.body.license;

                driver.save().then(driver => {
                        res.status(200).json('Driver updated!');
                    })
                    .catch(err => {
                        res.status(400).send("Updating failed");
                    }).catch(err => {
                        res.status(401).send("Updating failed");
                    });

        }

    });
});

/* once confirmed driver is deleted. */
driverRouter.route('/remove/:id').delete(function (req, res) {

    Driver.findOneAndDelete({
        _id: req.params.id
    }, function (err, res) {
        if (err) {
            console.log(err);
            res.status(400);
        }

    });
});


 

module.exports = driverRouter;