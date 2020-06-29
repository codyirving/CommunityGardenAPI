const express = require("express");

let app = express();
app.use(express.json());
const PORT = 3000;

let bedRouter = require("./routes/bedrouter");
app.use(bedRouter);

function runServer(databaseUrl, port = PORT) {

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });

}
if(require.main === module) {
    runServer("url");
}
module.exports = { app, runServer };