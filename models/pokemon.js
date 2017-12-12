var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pokemonSchema = new Schema({
  name: String,
  types: [String],
  level: Number,
  moves: [{type: Schema.Types.Objectid, Ref: "Moves"}], //This is probably not right
  maxHP: Number,
  sprites: [String] //will pull from API
});

module.exports = mongoose.model('Pokemon', pokemonSchema);