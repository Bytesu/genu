
/**
 * Created by bytesu on 15/9/22.
 */
var admin = require('./../../mods/admin');
function User() {};

User.prototype.render = function(req,res){
    res.render('login', {
        LOGIN: true,
        msg: null
    });
};
User.prototype.login = function(req,res){
    var user = req.body;
    if (admin.validateUser(user)) {
        req.session.user = user.name;
        res.redirect('/');
    } else {
        res.render('login', {
            pageTitle: '登录',
            LOGIN: true,
            msg: '用户名或密码错误！'
        });
    }
};

User.prototype.create_= function(req,res){
    res.send('user create !');
};
User.prototype.delete = function(req,res){
    res.send('user delete !');
};
User.prototype.update = function(req,res){
    res.send('user update !');
};
User.prototype.get = function(req,res){
    res.send('user get !');
};

User.prototype.loginout = function(req,res){
    delete req.session.user;
    res.render('login', {
        LOGIN: true
    });
};
module.exports = User;