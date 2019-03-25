
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// Get all records from database
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Add record to database.
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        // OK status
        res.status(200).end();
    });
});

// Update record from database.
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    },
    condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
            // OK status
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
