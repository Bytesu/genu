/**
 * Desc: Nodejs中透明转发
 * Created by bytesu on 15/9/24.
 */

//1. 利用request方式实现透明转发
var url = req.originalUrl;
//var request = require('request');
//    req.pipe(request(config.api_url_prefix + url)).pipe(res);
