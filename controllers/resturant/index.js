/**
 * Desc:
 * Created by bytesu on 15/10/17.
 */
/**
 * Created by bytesu on 15/9/22.
 */
var express = require('express');
var Router = express.Router();
var Cost = require('./Cost');
var Menu = require('./Menu');
var Orders = require('./Orders');
var menu = new Menu();
//Router.route('/').delete(user_.delete).post(user_.create_).put(user_.update).get(user_.get);//用户删除、创建、更新、获取
Router.route('/menu').post(menu.index).get(menu.get);
//Router.route('/renderUpload').post(user.renderUpload);
module.exports = Router;