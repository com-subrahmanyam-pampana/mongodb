/*Limit() Method
db.COLLECTION_NAME.find().limit(NUMBER)
*/


/*{_id : ObjectId("507f191e810c19729de860e1"), title: "MongoDB Overview"},
{_id : ObjectId("507f191e810c19729de860e2"), title: "NoSQL Overview"},
{_id : ObjectId("507f191e810c19729de860e3"), title: "Tutorials Point Overview"} */

db.mycol.find({},{"title":1,_id:0}).limit(2)

/*{"title":"MongoDB Overview"}
{"title":"NoSQL Overview"} */