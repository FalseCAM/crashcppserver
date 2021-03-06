'use strict';

var path = require('path');
var _ = require('lodash');

var mongohost = process.env.MONGO_HOST || 'localhost';

function requiredProcessEnv(name) {
    if (!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../..'),

    // Server port
    port: 3000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    test: {
        "testkey": "testvalue"
    },

    mongodb: {
        uri:    process.env.MONGOLAB_URI ||
                process.env.MONGOHQ_URL ||
                process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
                'mongodb://'+ mongohost +'/crashcppserver'
  },


};

// Export the config object based on the NODE_ENV
// ==============================================
//module.exports = _.merge(
//  all,
//  require('./' + process.env.NODE_ENV + '.js') || {});
module.exports = _.merge(
    all
    //,
    //require('./' + process.env.NODE_ENV + '.js')
    || {});
