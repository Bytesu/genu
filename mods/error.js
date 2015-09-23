/**
 * Created by bytesu on 15/9/22.
 */
'use strict';

var config = require('./../config');
var path   = require('path');

function Error_(app) {
    /**
     * 此处中间件可浏览器直接访问views后的文件名［不带后缀］
     */
    app.use(function (req, res, next) {
        var path = req.originalUrl.substr(1);
        return res.render(path);
    });

    app.route('/*').get(function (req, res) {
        res.status(404).sendfile(path.normalize(config.root + '/README.MD'));
    });

    app.use(function (err, req, res, next) {
        console.log(err.stack);
        res.status(500).send({status: 500, error: err.message || err});
    });
}

module.exports = Error_;