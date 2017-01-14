'use strict';

var express = require('express');
var controller = require('./api.controller');

var router = express.Router();

router.get('/hello', controller.hello);
router.get('/report', controller.report);
router.post('/report', controller.report);
router.get('/reports', controller.reports);

module.exports = router;