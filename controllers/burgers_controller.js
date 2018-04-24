var express = require("express");
var burger = require("../models/burger");

var router = express.Router();


router.get("/", function (req, res) {
        res.render("index");
});

router.get("/api", function (req, res) {
    burger.selectAll(function(data){
        res.json(data);
    });
});

router.post("/api/id/:id", function (req, res) {
    //update devour by id
    var id = req.params.id;
    burger.updateToDev(id, function(data){
        res.json(data);
    });
});

router.post("/api/save", function (req, res) {
    //create new
    var save = req.body.name;
    burger.insertNew(save, function(data){
        res.json(data);
    });
});


module.exports = router;