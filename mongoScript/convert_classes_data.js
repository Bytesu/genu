/**
 * Created by Jacky on 15/8/11.
 */

var db = connect("localhost:27017/xueyuanpai");
var cursor = db.user.find({role:'teacher','classes.teach_type':{$exists:true},classes:{$exists:true}});

while(cursor.hasNext()){
    var t = cursor.next();
    printjson(t);
    if(Object.prototype.toString.call(t.classes) === '[object Array]' && t.classes.length > 0) {
        printjson(t.classes);
        t.classes.forEach(function (cla) {
            cla.type = [];
            cla.teach_type.forEach(function (t) {
                cla.type.push({
                    name: t,
                    price: cla.price
                });
            });
            delete cla.price;
            delete cla.teach_type;
        });

        printjson(t.classes);
        db.user.save(t);
    }
}