/**
 * Created by byte on 2015/11/2.
 */
var crypto = require('crypto');
var fs = require('fs');
/**
 * md5 ¼ÓÃÜ
 * @param str
 * @returns {*}
 */
exports.md5 = function (str){
    var shasum = crypto.createHash('md5');
    shasum.update(str);
    var d_ = shasum.digest('hex');
    return d_;

};