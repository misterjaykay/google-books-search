const { json } = require("express");
const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    console.log("findAll req", req.query);
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    // YOUR CODE HERE

  },

  create: function(req, res) {
    console.log("create req", req.body);
    db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.json(err));
  },

  update: function(req, res) {
    // YOUR CODE HERE
    
  },

  remove: function(req, res) {
    console.log("delete req", req.params);
    db.Book.deleteOne({
        _id: req.params.id
    })
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(404).json(err));
  }
};
