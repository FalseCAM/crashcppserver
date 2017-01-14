'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ReportSchema = new Schema({
  title: String,
  reported: {type: Date, default: Date.now},
  body: String,
  report: String
});

var Report = mongoose.model('Report', ReportSchema);

module.exports = Report;