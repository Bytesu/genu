'use strict';
var path = require('path');
var _ = require('lodash');
/**
 * 应用配置
 */
var config = {
    host: 'localhost',
    port: process.env.PORT || 3000,
    root: path.normalize(__dirname + '/'),
    debug: true,
    get         assets() {
        return !this.debug
    },
    get statics() {
        return ['/public', '/bower_components'];
    },
    routers: ['post', 'user'],
    cookie: {
        secret: 'GeNu Cookie Secret !'
    },
    session: {
        secret: 'XBUAc7nSvUzxPsjUHqZURExjGAUVCT B2015',
        cookie: {maxAge: 1000 * 60 * 30},  //设置maxAge是30m后session和相应的cookie失效过期
        resave: false,
        name: 'sessionid',
        saveUninitialized: true
    },
    mongos: {
        db: 'mongodb://127.0.0.1/node_gn_dev',
        opt: {server: {poolSize: 20}}
    }
};

module.exports = config;
