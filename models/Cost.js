/**
 * Desc:
 * Created by bytesu on 15/10/17.
 */
/**
 * Desc:
 * Created by bytesu on 15/10/17.
 */
/**
 *
 * Created by bytesu on 15/9/22.
 */
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
var CostSchema = new Schema({
    name: { type: String},
    price: { type: Number},
    total: { type: Number}
});


//UserSchema.plugin(BaseModel);

//UserSchema.index({loginname: 1}, {unique: true});
//UserSchema.index({email: 1}, {unique: true});
//UserSchema.index({accessToken: 1});

mongoose.model('Cost', CostSchema);
