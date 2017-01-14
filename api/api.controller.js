'use strict';

var config = require('../config/environment');
var Report = require('./report.model');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we re connected!');
});

exports.hello = function (req, res) {
    return res.status(200).send('Hello World!');
}

exports.report = function (req, res) {
    var report_ = new Report({title: req.query.title,
        //reported:  Date.now,
        body: req.query.body,
        report: req.query.report
    });
    // console.log(report_);
    report_.save(function (err, doc) {
        if (err) {
            // error handled in the callback
            console.error('Error:', err.message);
        } else {
            console.log('Success:', doc);
        }
        }).catch(function() {});
    return res.status(200).send();
}   

exports.reports = function (req, res) {
    res.setHeader('Content-Type', 'application/json'); 
    Report.find({}, function(err, reports) {
        if (err) return res.send(err.message);
        return res.json(reports);
    });
}