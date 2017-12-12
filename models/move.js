var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moveSchema = new Schema({
  name: String,
  type: String,
  power: Number
});

module.exports = mongoose.model('Move', moveSchema);