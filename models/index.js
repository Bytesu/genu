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
require('./Menu');
require('./Cost');
require('./Orders');

exports.User         = mongoose.model('User');
exports.Post         = mongoose.model('Post');
//苏家小馆
exports.Cost         = mongoose.model('Cost');
exports.Menu         = mongoose.model('Menu');
exports.Orders         = mongoose.model('Orders');

