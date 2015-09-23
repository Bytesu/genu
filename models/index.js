/**
 * Created by bytesu on 15/9/22.
 */
var mongoose = require('mongoose');
var config   = require('../config');

mongoose.connect(config.mongos.db, config.mongos.opt, function (err) {
    if (err) {
        console.error('Mongodb connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

// models
require('./user');
require('./post');

exports.User         = mongoose.model('User');
exports.Post         = mongoose.model('Post');

