//pull in required dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const db = require('./config/keys').MongoURI;

const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const methodOverride = require('method-override');
const passport = require("passport");


const adminRoute = require("./routes/api/adminRoute");
const driverRoute = require("./routes/api/driverRoute");
const busOwnerRoute = require("./routes/api/busOwnerRoute");
const busRoute = require("./routes/api/busRoute");
const fareRoute = require("./routes/api/fareRoute");
const routeRoute = require("./routes/api/routeRoute");
const timeTableRoute = require("./routes/api/timeTableRoute");
const generalRoute = require("./routes/api/generalRoute");


//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(passport.initialize());

// connect to mongoose
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("MongoDB succesfully connected")).catch(err =>console.log(err));


require("./config/passport")(passport);
/** Seting up server to accept cross-origin browser requests */
app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(logger('dev'));


// Put all API endpoints under '/api'

//app.use('/instructor', require('./routes/instructor.route'));
app.use("/api/admins", adminRoute);
app.use("/api/drivers", driverRoute);
app.use("/api/owners", busOwnerRoute);
app.use("/api/buses", busRoute);
app.use("/api/fares", fareRoute);
app.use("/api/routes", routeRoute);
app.use("/api/ttables", timeTableRoute);
app.use("/api/general", generalRoute);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const port = 3001;
var server = app.listen(port);
console.log("App connected on port "+port+"");

module.exports = server;
