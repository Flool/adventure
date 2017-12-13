var express = require('express');
var router = express.Router();
var moveCtrl = require('./../controllers/moves');

router.get('/pokemon', moveCtrl.index)

module.exports = router;