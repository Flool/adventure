var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enemySchema = new Schema({
  name: String,
  pokemon: [String], //will pull from api
  sprites: [String] //will also pull from api just like everything else thats actually cool
});

module.exports = mongoose.model('Enemy', enemySchema);