/**
 * Desc:
 * Created by bytesu on 15/10/18.
 */
/**
 * Desc:
 * Created by bytesu on 15/10/18.
 */
var model =  require('./../models/');
var Q = require('q');
var order = function(){};
order.prototype.save = function(menusItem){
    var defer = Q.defer();
    var order_ = new model.Orders(menusItem);
    order_.save(function(err,result){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(result);
        }
    });
    return defer.promise;
};

module.exports = order;