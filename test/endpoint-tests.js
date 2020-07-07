process.env.NODE_ENV = "test";
const { TEST_DATABASE_URL, PORT } = require("../config");
const { app, closeServer, runServer } = require("../server");
const chai = require("chai");
var expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

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
console.log("Inserting records");
GardenBeds.insertMany(seedData, { ordered: false }, function (err) {
  console.log("Insert Error: " + err);
});
describe("Endpoint Tests", function () {
  before(function () {
    return runServer(TEST_DATABASE_URL, PORT);
  });

  beforeEach(function () {
    return seedData;
  });

  after(function () {
    return closeServer();
  });

  describe("GET all gardenbeds", function () {
    it("should return status 200 and json array of results", function () {
      return chai
        .request(app)
        .get("/gardenbeds/")
        .then(function (res, err) {
          if (err) console.log("rejected..." + err);
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a("array");
        });
    });
  });

  describe("GET single gardenbed", function () {
    it("should return status 200 and json object result", function () {
      return chai
        .request(app)
        .get("/gardenbeds/1")
        .then(function (res, err) {
          if (err) console.err(err);
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a("object");
        });
    });
  });
});
