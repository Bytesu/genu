/**
 * Created by bytesu on 15/9/22.
 */
var validate_ = require('./../../mods/validate');
var code_ = require('./../../mods/code');
var res_ = require('./../../mods/Res');
function Post() {
};

Post.prototype.list = function (req, res) {
    var current = req.params.current;
    console.log(current);
    if(!validate_.isNumber(current)){
        return res_._200Bad(res,code_.PageError);
    };
    res.render('post/list', {
        page:{
            total:23,
            current:current
        },
        posts: [
            {
                title: "标题",
                content: "内容"
            },
            {
                title: "标题",
                content: "内容"
            },
            {
                title: "标题",
                content: "内容"
            },
            {
                title: "标题",
                content: "内容"
            },
            {
                title: "标题",
                content: "内容"
            },
            {
                title: "标题",
                content: "内容"
            }
        ]
    });
};

module.exports = Post;