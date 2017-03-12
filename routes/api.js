//dependency
var express = require('express');
var router = express.Router();

//get models
var Booking = require('../models/booking');

//routes:
Booking.methods(['get','post','put','delete']);
Booking.register(router, '/booking');

//return router
module.exports = router;
