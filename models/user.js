/**
 *
 * Created by bytesu on 15/9/22.
 */
var mongoose     = require('mongoose');
//var BaseModel    = require("./base_model");
var Schema       = mongoose.Schema;
var utility      = require('utility');
var _            = require('lodash');

var UserSchema = new Schema({
    name: { type: String},
    loginname: { type: String},
    pass: { type: String },
    email: { type: String},
    profile_image_url: {type: String},
    location: { type: String },
    signature: { type: String },
    profile: { type: String },

    topic_count: { type: Number, default: 0 },
    reply_count: { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    active: { type: Boolean, default: false },

});

//UserSchema.plugin(BaseModel);

UserSchema.index({loginname: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});
//UserSchema.index({accessToken: 1});

mongoose.model('User', UserSchema);
