/**
 * Created by bytesu on 15/9/22.
 */
var express = require('express');
var Router = express.Router();
var Post = require('./ctrl');
var post_ = new Post();
Router.get('/list/:current',post_.list);
module.exports = Router;