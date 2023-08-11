var express = require('express');
var router = express.Router();
const conroller = require('../controllers/rooms');

/* GET home page. */
router.get('/', conroller.rooms);

module.exports = router;