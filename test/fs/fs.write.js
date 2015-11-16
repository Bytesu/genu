/**
 * Created by wws on 15/11/13.
 */

var fs = require('fs');
fs.writeFile('test/fs/files/test.txt', 'zhong test', 'utf8', function(err) {
    if (err) {
        throw (new Error(500, '文件保存失败:', err));
    } else {
        //console.log('该文件:' + name + '(' + encoding + ')' + ' 保存在' + path);

        return 1;
    }
});