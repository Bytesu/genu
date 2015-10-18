/**
 * Desc:
 * Created by bytesu on 15/10/18.
 */
var Menu_ =  require('./../models/').Menu;
var menu = function(){};
menu.prototype.index = function(menus){
    var menu_ = new Menu_();
    menu_.save(menus);
};