/**
 * Desc:
 * Created by bytesu on 15/10/17.
 */
//{
//    order_detail:{
//        no_1:{
//            name:String,    //名称
//                num:Number,     //数量
//                price:Float,    //单价
//                category:Number //菜品分类
//        },
//    ...
//        no_n:{
//            name:String,    //名称
//                num:Number,     //数量
//                price:Float,    //单价
//                category:Number //菜品分类
//        },
//    },
//    quantity:Number,        //菜品数量
//        num:Number,             //用餐人数
//    should:Float,           //应收
//    actual:Float,           //实收
//}
var mongoose     = require('mongoose');
//var BaseModel    = require("./base_model");
var Schema       = mongoose.Schema;
var utility      = require('utility');
var _            = require('lodash');
//成本cost
//{
//    name:String,            //食材名称
//        price:Float,            //单价
//    total:Float,            //总费
//}
var OrderSchema = new Schema({
    order_detail:[{
            name:String,    //名称
            _id:Schema.Types.ObjectId,    //菜品ID
            num:Number,     //数量
            price:Number,    //单价
            parentId:Schema.Types.ObjectId //菜品分类ID
        }],
    quantity: { type: Number},
    time:{type:Date,default:Date.now},
    should: { type: Number},
    actual: { type: Number}
});

//UserSchema.plugin(BaseModel);

//UserSchema.index({loginname: 1}, {unique: true});
//UserSchema.index({email: 1}, {unique: true});
//UserSchema.index({accessToken: 1});

mongoose.model('Orders', OrderSchema);