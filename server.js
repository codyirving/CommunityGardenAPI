const express = require("express");

let app = express();
app.use(express.json());
const PORT = 3000;

const mongoose = require("mongoose");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

// List of routers being used
let bedRouter = require("./routes/bedrouter");
app.use(bedRouter);

let server;


function runServer(databaseUrl, port = PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://localhost/CGAPI", { useNewUrlParser: true, useUnifiedTopology: true }, err => {
            if(err) {
                return reject(err);
            }
            server =  app.listen(port, () => {
                console.log(`Listening on port ${port}`);
                resolve();
            })
            .on('error', err => {
                mongoose.disconnect();
                reject(err);
            })

        });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve,reject) => {
            console.log('Closing server..');
            server.close(err => {
                if(err) {
                    console.log('Error closing server.');
                    return reject(err);
                }
                console.log('Closed');
                resolve();
            });
        });
    });
}
if(require.main === module) {
    runServer("url");
}
module.exports = { app, runServer, closeServer };