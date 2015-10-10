/**
 * Created by bytesu on 15/9/21.
 */
/**
 *
 * Created by bytesu on 15/9/22.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var utility      = require('utility');
var _            = require('lodash');

var PostSchema = new Schema({
    title: { type: String},
    author: { type: String},
    type: { type: String },
    ctime: { type: Date},
    ctnt: {type: String},
    tags: { type: String },
    reader:{type:Number},
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }

});

mongoose.model('Post', PostSchema);
