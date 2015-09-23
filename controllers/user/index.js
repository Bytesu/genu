/**
 * Created by bytesu on 15/9/22.
 */
var express = require('express');
var Router = express.Router();
var User = require('./ctrl');
var user_ = new User();
Router.route('/').delete(user_.delete).post(user_.create_).put(user_.update).get(user_.get);//用户删除、创建、更新、获取
module.exports = Router;