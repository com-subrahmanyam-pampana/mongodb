
db.createCollection("grades");

db.grades.insertOne({
    student_id: 123456,
    sex: "M",
    grades: "750",
    class: "B2"
  })

db.grades.createIndex( { student_id: 1 } )

/*
the index will be in ascending order and 
MongoDB automatically creates the index 
name like the following unless you specify
 the name differently: student_id_1
*/
/*
db.grades.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { student_id: 1 }, name: 'student_id_1' }
]
*/
