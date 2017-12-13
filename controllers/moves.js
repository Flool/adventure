var Move = require('./../models/move');

function index(req, res) {
  console.log('In index action')
  Move.find({}, function(err, data) {
    console.log(data)
    res.json(data)
  })
}

module.exports = {
  index
}