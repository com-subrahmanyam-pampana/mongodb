use admin;

db.createCollection("users");
db.createCollection("payments");

const data=db.getCollectionNames();
console.log(data)