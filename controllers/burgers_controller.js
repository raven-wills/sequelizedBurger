var express = require("express");
var router = express.Router();

var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    var burgers = req.body;

    db.burger
      .create({
        burger_name: burgers.burger_name,
        devoured: burgers.devoured
      })
      .then(function(results) {
        res.json(results);
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.burger
      .update(
        {
          devoured: req.body.devoured
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(function(results) {
        res.json(results);
      });
  });
};
