const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CGAPI', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
})

//Get GardenBeds from DB 
const { GardenBeds } = require('../models/gardenbeds_model');

router.route('/gardenbeds/').get( function(req,res) {
    GardenBeds.find({}).then(
        //Return results as json
        beds => { res.status(200).json(beds) }
    ).catch(err => {
        res.status(500).json({ message: "Internal server error" });
    });
});

router.route('/gardenbeds/:id')
.all(function(req, res, next) {
    next()
})
.get(function (req, res, next) {
    res.status(200).json({'beds': req.params.id});
});





module.exports = router;