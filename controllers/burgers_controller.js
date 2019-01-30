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

router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

// update to-do