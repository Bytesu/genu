/**
 * Desc:
 * Created by bytesu on 15/10/17.
 */
var business = require('./../../business');
var mods = require('./../../mods');
var Orders = function () {
};
/**
 * 存入菜单
 * @param req
 * @param res
 */
Orders.prototype.save = function (req, res, next) {

    var order = new business.Orders();

    order.save(orders).then(function(result){
        return mods.Res_._200Good(res,result);
    }).catch(function(e){
        return mods.Res_._200Bad(res,e);
    });
};
Orders.prototype.formatOrdersResult = function (orders) {
    var order = {quantity:0,actual:0,should:0};
    for(var val_ in orders){

    }
};
/**
 *
 * @param req
 * @param res
 */
Orders.prototype.get = function (req, res) {

};
module.exports = Orders;