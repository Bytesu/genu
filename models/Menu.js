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

var MenuSchema = new Schema({
    name: { type: String},
    price: { type: Number},
    parentId: { type: ObjectId}
});

//UserSchema.plugin(BaseModel);

//UserSchema.index({loginname: 1}, {unique: true});
//UserSchema.index({email: 1}, {unique: true});
//UserSchema.index({accessToken: 1});

mongoose.model('Menu', MenuSchema);
