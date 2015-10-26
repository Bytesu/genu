/**
 * Desc:响应模块
 * Created by bytesu on 15/9/23.
 */
var Res = {};
var _ = require('lodash');
Res._200Good = function(res,data){
    res.status(200).send({code:200,msg:'OK',data:data});
};
Res._200Bad = function(res,msg){
    console.log(msg);
    res.status(200).send(_.merge({code:201,msg:'200 Bad !'},{msg:msg}));
};
module.exports = Res;