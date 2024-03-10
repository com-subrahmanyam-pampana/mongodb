
/*
Both find methods accept a second parameter called projection.

This parameter is an object that describes which fields to include in the results.

Note: This parameter is optional. If omitted, all fields will be included in the results.
*/

db.posts.find({}, {title: 1, date: 1})