/**
 * Desc:
 * Created by bytesu on 15/10/17.
 */
var business = require('./../../business');
var Menu = function () {
};
/**
 * 存入
 * @param req
 * @param res
 */
Menu.prototype.render = function (req, res, next) {
    var menu = new business.Menu();
    menu.find({}).then(function (result) {
        res.render('sujiaxiaoguan-menu/index', {
            menus: result
        });
    }).catch(function (e) {
        console.log(e.message || e);
        res.render('error', {e: e.message || e});
        //next(new Error('页面错误'));
        //res.render('sujiaxiaoguan-menu/index.html',{menus:result});
    });


};
/**
 *
 * @param req
 * @param res
 */
Menu.prototype.save = function (req, res) {

};
module.exports = Menu;