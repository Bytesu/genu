/**
 * Desc:
 * Created by bytesu on 15/9/23.
 */
/**
 * Desc:
 * Created by bytesu on 15/9/23.
 */
var httpproxy = require('httpproxy');
httpProxy.createServer({
    target:'http://localhost:9000'
}).listen(8003);