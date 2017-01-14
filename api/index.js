'use strict';

var express = require('express');
var controller = require('./api.controller');

var router = express.Router();

router.get('/hello', controller.hello);

module.exports = router;