process.env.NODE_ENV = 'test';
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
GardenBeds.insertMany(seedData,{ordered: false}, function (err) {
  console.log("Insert Error: " + err);
});
console.log("Running tests");
describe("Endpoint Tests", function () {
  before(function () {
    console.log("Running Server");
    return runServer();
  });

  beforeEach(function () {
    console.log("Seeding data");
    return seedData;
  });

  after(function () {
    return closeServer();
  });
  console.log("Inside Endpoint tests");
  it("GET all gardenbeds", function () {
  
    return chai
      .request(app)
      .get('/gardenbeds/')
      .then(function (res,err) {
        console.log('GET ok');
        if(err) console.log('rejected...' + err);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a("array");
      });
  });
});
