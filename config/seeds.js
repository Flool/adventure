var mongoose = require('mongoose');
require('dotenv').config();
require('./database');

// require models
var Move = require('./../models/Move');

// require seed data
var moveData = require('./moveData');

Move.remove({})
  .then(() => {
    return Move.create(moveData)
})
  .then((move) => {
    mongoose.connection.close()
    process.exit()
  })