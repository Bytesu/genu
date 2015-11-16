/**
 * Created by wws on 15/11/16.
 *
 *
 * 参考:
 * MongoDB Scripting
 * https://docs.mongodb.org/manual/administration/scripting/
 *
 * Write Scripts for the mongo Shell
 * https://docs.mongodb.org/manual/tutorial/write-scripts-for-the-mongo-shell/
 * mongo Shell Methods
 * https://docs.mongodb.org/manual/reference/method/
 */


//mongo 127.0.0.1:27017/meteor --shell /Users/wws/archive/genu/test/mongo/clearDirtyData.js;
var date_ = 1447113600000; //  2015-11-09
var date_ios = '2015/11/10 00:00:00';
if(true){
    date_ = 1447862400000;
    date_ios = '2015/11/19 00:00:00';
}
print(db.getCollectionNames());
print(db.Msglog.find());
db.Msglog.remove({create_time:{$lt:date_}})
db.attach.remove({uploadTime:{$lt:date_}})
db.formCustom.remove({create_time:{$lt:date_}})
db.inbox.remove({"createTime":{$lt:date_}})
db.logininfo.remove({"loginTimeInt":{$lt:date_}})
db.project.remove({"create_time":{$lt:date_}})
db.task.remove({"create_time":{$lt:date_}})
db.vcode.remove({"create_time":{$lt:date_}})
db.workspace.remove({"create_time":{$lt:date_}})
db.workflow.remove({"create_time":{$lt:date_}})
db.users.remove({"createdAt":{$lt: new Date(date_ios)}});


//db.getCollection('logininfo').find({"loginTimeInt":{$lt:1447113600000}})
//printjson(db.Msglog.find({create_time:{$lt:1447113600000}}))
//print(datetime);
//
//var cursor = db.my_soft_info.find({"percent":0,"starttime":{$lt: datetime},"endtime":{$gt: datetime}});
//while(cursor.hasNext())
//{
//    var temp = cursor.next();
//    print(tojson(temp.bookid));
//    var arr = db.soft_basic_info.findOne({"id":temp.uid},{softcount:1});
//    db.soft_basic_info.update({"id":temp.uid},{$set:{"freedate":arr.softcount+1,"getgrade":3}});
//}
//cursor = db.Msglog.find();
//while ( cursor.hasNext() ) {
//    printjson( cursor.next() );
//}
quit();