/**
 * Created by s_ on 15/11/19.
 */
var http = require('http');
var memwatch = require('memwatch');
var server = http.createServer(function (req, res) {
    for (var i=0; i<1000; i++) {
        server.on('request', function leakyfunc() {});
    }

    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
memwatch.on('leak', function(info) {
    console.error('Memory leak detected: ', info);
});
memwatch.on('stats', function(stats) {
// Take first snapshot
    var hd = new memwatch.HeapDiff();

// do some things ...

// Take the second snapshot and compute the diff
    var diff = hd.end();
    console.log(diff)
});
server.setMaxListeners(0);
console.log('Server running at http://127.0.0.1:1337/. Process PID: ', process.pid);
