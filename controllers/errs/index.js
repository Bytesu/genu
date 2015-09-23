/**
 * Created by bytesu on 15/9/22.
 */
var express = require('express');
var Router = express.Router();
var Errors = require('./ctrl');
var errors_ = new Errors();
Router.route('/p/*').get(errors_.render);
Router.use(errors_._500);
Router.route('/*').all(errors_._404);
module.exports = Router;