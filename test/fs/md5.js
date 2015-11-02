var crypto = require('crypto');
var fs = require('fs');

var shasum = crypto.createHash('md5');
var d = 'A';
  shasum.update(d);
  var d_ = shasum.digest('hex');
  console.log(d_ + '  ');
