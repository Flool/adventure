var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pokemonSchema = new Schema({
  name: String,
  types: [String],
  moves: [{type: Schema.Types.Objectid, Ref: "Moves"}], //This is probably not right
});

module.exports = mongoose.model('Pokemon', pokemonSchema);