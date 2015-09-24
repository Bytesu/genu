/**
 * Desc:响应模块
 * Created by bytesu on 15/9/23.
 */
var Res = {};
Res._200Good = function(res,msg){
    res.status(200).send(msg||{code:200,msg:'OK'});
};
Res._200Bad = function(res,msg){
    console.log(msg);
    res.status(200).send(msg||{code:200,msg:'200 Bad !'});
};
module.exports = Res;