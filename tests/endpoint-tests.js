const { app, runServer } = require("../server");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require('chai-http');

const seedData = [
  {
    bedNumber: 1,

    bedOwner: { firstName: "Cody", lastName: 1234, phone1: 12345 },
    bedInformation: {
      dateAssigned: "",
      bedContents: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    },
  },
  {
    bedNumber: 2,

    bedOwner: { firstName: "Cody", lastName: 1234, phone1: 12345 },
    bedInformation: {
      dateAssigned: "",
      bedContents: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    },
  },
  {
    bedNumber: 3,

    bedOwner: { firstName: "Cody", lastName: 1234, phone1: 12345 },
    bedInformation: {
      dateAssigned: "",
      bedContents: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    },
  },
  {
    bedNumber: 4,

    bedOwner: { firstName: "Cody", lastName: 1234, phone1: 12345 },
    bedInformation: {
      dateAssigned: "",
      bedContents: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    },
  },
  {
    bedNumber: 5,

    bedOwner: { firstName: "Cody", lastName: 1234, phone1: 12345 },
    bedInformation: {
      dateAssigned: "",
      bedContents: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    },
  },
  {
    bedNumber: 6,

    bedOwner: { firstName: "Cody", lastName: 1234, phone1: 12345 },
    bedInformation: {
      dateAssigned: "",
      bedContents: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    },
  },
];

const { GardenBeds } = require("../models/gardenbeds_model");

GardenBeds.insertMany(seedData, function(err) {
    console.log("Insert Error: " + err);
});


describe('test endpoints', function () {

    before(function () {
        return runServer();
    });

    beforeEach(function () {
        return seedData;
    });


    after(function () {
        return closeServer();
    });

    describe('getPositions', function () {}
}