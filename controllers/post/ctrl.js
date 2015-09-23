
/**
 * Created by bytesu on 15/9/22.
 */
function Post() {};

Post.prototype.list = function(req,res){

    res.render('post/list',{
        posts:[
            {
                title:"标题",
                content:"内容"
            },
            {
                title:"标题",
                content:"内容"
            },
            {
                title:"标题",
                content:"内容"
            },
            {
                title:"标题",
                content:"内容"
            },
            {
                title:"标题",
                content:"内容"
            },
            {
                title:"标题",
                content:"内容"
            }
        ]
    });
};

module.exports = Post;