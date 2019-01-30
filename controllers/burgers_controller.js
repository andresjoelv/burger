var express = require("express");

var router = express.Router();


// Import the model (burger.js) to use its database functions.
var burger = import("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});