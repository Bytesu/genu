/**
 * Created by bytesu on 15/9/15.
 */

function crossOrigin(req, res, next) {
    if (/\/crossOrigin\//.test(req.originalUrl)) {
        // res.set('Access-Control-Allow-Origin', 'http://192.168.10.135:3000');
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Credentials', 'true');
        // res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return res.json('萌萌哒~');
    }
    next();
}
module.exports = crossOrigin;
//eg:
//jQuery.ajax({
//    url: 'http://192.168.10.135:8080',
//    xhrFields: {
//        withCredentials: true
//    },
//    crossDomain: true
//}, function() {
//    console.log(arguments);
//});
