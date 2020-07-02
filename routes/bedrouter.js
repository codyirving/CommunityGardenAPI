const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/CGAPI", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

//Get GardenBeds from DB
const { GardenBeds } = require("../models/gardenbeds_model");

router
  .route("/gardenbeds/")
  .get(function (req, res) {
    GardenBeds.find({})
      .then(
        //Return results as json
        (beds) => {
          res.status(200).json(beds);
        }
      )
      .catch((err) => {
        res.status(500).json({ message: `Internal server error: ${err}` });
      });
  })
  .post(function (req, res) {
    // Will insert bed if bedNumber does not exist, and update bed
    // if bedNumber does exist
    
    GardenBeds.findOneAndUpdate(
      { bedNumber: req.body.bedNumber },
      req.body,
      {
        new: true, //returns document AFTER update
        upsert: true, //create document if non-existant
        runValidators: true, //ensures schema validation
        setDefaultsOnInsert: true, //set defaults for schema
      },
      function (error, doc) {
        if (error) res.status(500).json({ message: error });
        else if (doc) res.status(200).json({ success: doc });
        else res.status(500).json({ message: "validation error" });
      }
    );
  });

router
  .route("/gardenbeds/:id")
  .all(function (req, res, next) {
    next();
  })
  .get(function (req, res, next) {
    GardenBeds.findOne({ bedNumber: `${req.params.id}` })
      .then((bed) => {
        res.status(200).json(bed.serialize());
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal server error" });
      });
  });

module.exports = router;
