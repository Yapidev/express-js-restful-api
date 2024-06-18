// import express
const express = require("express");

// import CORS
const cors = require("cors");

// import bodyParser
const bodyParser = require("body-parser");

// import router
const router = require("./routes");

// init app
const app = express();

// use CORS
app.use(cors());

// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// define port
const port = 3000;

// route
app.get("/", (req, res) => {
    res.send("Hello World!");   
});

// define routes
app.use("/api", router);

// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
