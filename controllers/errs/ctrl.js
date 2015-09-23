
/**
 * Created by bytesu on 15/9/22.
 */
function Errors() {};
/**
 * 此处中间件可浏览器直接访问views后的文件名［不带后缀］
 */
Errors.prototype.render = function(req,res){
    var path = req.originalUrl.substr(1);
    return res.render(path);
};
Errors.prototype._404 = function(req,res){
    res.status(404).send("您的路径可能出错，请检查后重试！.");
};
Errors.prototype._500 = function (err, req, res, next) {
    console.log("error handle here: " + err);
    console.log(err.stack);
    res.status(500).send({error: err.message || err});
};

module.exports = Errors;