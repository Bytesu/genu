var fs = require('fs');
var q = require('q');

// stats.isFile()
// stats.isDirectory()
// stats.isBlockDevice()
// stats.isCharacterDevice()
// stats.isSymbolicLink() (only valid with fs.lstat())
// stats.isFIFO()
// stats.isSocket()
var array = {};
var count = 0;
function countFile(path) {
    var defer = q.defer();

    fs.readdir(path, function (err, files) {
        var ayncArr = [];

        files.forEach(function (val) {
            //existsFile(val)

            fs.stat(val, function (errStat, statObj) {
                if (statObj.isFile()) {

                    readFilePath(val).then(function (one) {

                    });
                } else if (statObj.isDirectory()) {
                    // countFile(val).then(function(){

                    // }).catch(function(e){
                    //   throw new
                    // });
                }
            });
            ayncArr.push(existsFile(val))
        });

        q.all(ayncArr).then(function (result) {
            //


        })
    })
}


function existsFile(val) {
    var defer = q.defer();
    fs.stat(val, function (errStat, statObj) {
        if (statObj.isFile()) {
            readFilePath(val).then(function (one) {

            })
        } else if (statObj.isDirectory()) {
            // countFile(val).then(function(){

            // }).catch(function(e){
            //   throw new
            // });
        }
    });
    return defer.promise;
}
var crypto = require('crypto');

function md5Str(arg) {

    var shasum = crypto.createHash('md5');
    shasum.update(arg);
    var d_ = shasum.digest('hex');
    console.log(d_ + '  ');
    return d_;
}

function readFilePath() {
    var defer = q.defer();
    fs.readFile(val, function (err, data) {
        if (err) defer.reject(err);
        //md5  key
        array[md5Str(data)] = data;
        defer.resovle(1);
    })
    return defer.promise;
};


