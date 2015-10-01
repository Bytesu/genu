
/**
 * Created by bytesu on 15/9/22.
 */
var admin = require('./../../mods/admin');
var fs = require('fs');
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
User.prototype.renderUpload = function(req, res){
    //获取user文件夹里的所有文件名
    fs.readdir('.../public/upload/img/', function(err, files){
        res.render('components/form', { title: 'GMTest by KIDx.'
            , files: files
        });
    });
};
var util = require('util');
User.prototype.upload = function(req,res){
    console.log('提交表单文本字段：');
    console.log(util.inspect(req.body));
    res.header('Content-Type', 'text/plain');
    var path = req.files.img.path;	//获取用户上传过来的文件的当前路径
    var sz = req.files.img.size;
    if (sz > 2*1024*1024) {
        fs.unlink(path, function() {	//fs.unlink 删除用户上传的文件
            res.end('1');
        });
    } else if (req.files.img.type.split('/')[0] != 'image') {
        fs.unlink(path, function() {
            res.end('2');
        });
    } else {
        return res.end('3');
        //
        //imageMagick(path)
        //    .resize(150, 150, '!') //加('!')强行把图片缩放成对应尺寸150*150！
        //    .autoOrient()
        //    .write('public/images/user/'+req.files.img.name, function(err){
        //        if (err) {
        //            console.log(err);
        //            res.end();
        //        }
        //        fs.unlink(path, function() {
        //            return res.end('3');
        //        });
        //    });
    }
};
module.exports = User;