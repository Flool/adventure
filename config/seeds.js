var mongoose=require('mongoose');
require('./database')
var product=require('../models/move');
var moveData=require('./moveData');

move.remove({}).then( () => {
  return move.create(moveData)
})
.then((move) => {
  console.log(moves)
  mongoose.connection.close()
  process.exit()
})