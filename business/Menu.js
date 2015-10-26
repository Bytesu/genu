/**
 * Desc:
 * Created by bytesu on 15/10/18.
 */
var model =  require('./../models/');
var Q = require('q');
var menu = function(){};
menu.prototype.save = function(menusItem){
    var defer = Q.defer();
    var menu_ = new model.Menu(menusItem);
    menu_.save(function(err,result){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(result);
        }
    });
    return defer.promise;
};
menu.prototype.find = function (query){
    var defer = Q.defer();
    model.Menu.find(query,function(err,result){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(result);
        }
    });
    return defer.promise;
};
var menuInstance = new menu();
//menuInstance.save({name:"米饭",price:1,parentId:'5623b733b602cf261933516f'});
//
menu.prototype.parseMenuData = function(parentId,opt){
    var that = this;
    parentId = parentId==undefined?null:parentId;
    var menuData = model.MenuJSON;
    for(ppty in opt){
        if(typeof opt[ppty]=='object') {
        }else{
            that.save({name:ppty,price:opt[ppty],parentId:parentId}).then(function(){
            });
        }
    };
};

module.exports = menu;