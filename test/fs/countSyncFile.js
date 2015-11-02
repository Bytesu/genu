var fs = require('fs');
var crypto = require('crypto');
var _path = require('path');

function readDirStep1(path) {
    var defer = q.defer();
    fs.readdir(path, function (err, files) {
        if(err){
            defer.reject(err)
        }else{
            defer.resolve(files);
        };
    });
    return defer.promise;
}
function readdirUnit(path){
    var defer = q.defer();
    readDirStep1(path)
        .then(function(files){
            return readDirStep2(files);
        }).then(defer.resolve).catch(defer.reject);
    return defer.promise;
}
function main (path){

}
var _ = require('lodash');
function readDirStep2(files){
    var defer = q.defer();

    q.all(files.map(function(val){
        return readStatCtner(val);
    })),then(function(fileArray){
        var tmp = {};
        fileArray.forEach(function(val_){
            _.merge(tmp,val_);
        });
        defer.resolve(tmp);
    }).catch(function(e){
        console.log('异常了：'+e);
    });

    return defer.promise;
}
function readStatCtner (val){
    var defer = q.defer();
    fsStat(val).then(function(resStat){
        if(resStat.isFile()){
            return fsReadFile(val)
        } else if(resStat.isDirectory()){
            return readDirStep1(val);
        }
    }).then(function(fileDir){
        return readdirUnit(fileDir)
    }).then(defer.resolve).catch(defer.reject);
    return defer.promise;
}
/**
 * promise 读取文件属性
 * @param path
 * @returns {r.promise|Function|*|promise|d.promise}
 */
function fsStat(path){
    var defer = q.defer();
    fs.stat(path,function(err,fsStat){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(fsStat);
        }
    });
    return defer.promise;
}
/**
 * Promise异步读取目录
 */
function fsReadDir (dir){
    var defer = q.defer();

    return defer.promise;
}
/**
 * Promise异步读取文件
 * @param path
 * @returns {r.promise|Function|*|promise|d.promise}
 */
function fsReadFile(path){
    var defer = q.defer();
    fs.readFile(path,function(err,file){
        if(err){
            defer.reject(err);
        }else{
            var fileDes = {};
            fileDes[md5Str(file)] = file;
            defer.resolve(fileDes);
        }
    });
    return defer.promise;
}


countFile('./../../test/');
console.log(Object.keys(array).length)

function md5Str(arg) {
    var shasum = crypto.createHash('md5');
    shasum.update(arg);
    var d_ = shasum.digest('hex');
    return d_;
}


