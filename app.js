/**
 * Main application file
 */

'use strict';

var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var session = require('cookie-session');
var _ = require('lodash');
var fs = require('fs');

var app = express();

app.set('views', config.root + '/views');
app.engine('html', require('ejs-mate'));
app.set('view engine', 'html');
//app.locals._layoutFile = 'tmpl.html';
app.locals._ = _;

[].map.call(config.statics, function (static_) {
    app.use(express.static(__dirname + static_));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.use(require('csurf')({cookie:true}));

app.all('*', require('compression')()); //gzip压缩模块
app.use(cookieParser(config.cookie.secret));

app.use(session(config.session));
app.use(function(req,res,next){
    console.log(req.originalUrl);
    next();
});
app.use('/resturant/', require('./controllers/resturant/'));


fs.readdir('./controllers',function(errs,files){
    //
    [].map.call(files, function (r) {
        if(r!='errs'){
            console.log('RRRR:'+r);

            app.use('/' + r, require('./controllers/' + r + '/'));
        }
    });
});
require('./mods/error')(app);
// Start server
app.listen(config.port, config.ip, function () {
    console.log('Express serving, please access with: http://%s:%s', config.host, config.port);
});
