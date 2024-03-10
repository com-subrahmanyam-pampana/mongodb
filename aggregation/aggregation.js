

const data = [
    {
        title: 'MongoDB Overview',
        description: 'MongoDB is no sql database',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    },
    {
        title: 'NoSQL Overview',
        description: 'No sql database is very fast',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 10
    },
    {
        title: 'Neo4j Overview',
        description: 'Neo4j is no sql database',
        by_user: 'Neo4j',
        url: 'http://www.neo4j.com',
        tags: ['neo4j', 'database', 'NoSQL'],
        likes: 750
    }
];

/*
Now from the above collection, 
if you want to display a list stating how 
many tutorials are written by each user, 
then you will use the following aggregate() 
method −
*/

db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])

/*
{ "_id" : "tutorials point", "num_tutorial" : 2 }
{ "_id" : "Neo4j", "num_tutorial" : 1 }
*/
