/* commands to start the database
/C/Users/Cathy/mongo/Server/3.6/bin/mongod --dbpath /C/Users/Cathy/mongo-data/
*/ 
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a765442ae5a9e9d3959cf35')
    //   }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'Clay Chase'}).toArray().then((docs) => {
        //console.log(`There were/was ${count} match(es) for that name`);
        console.log('Matches for name Clay ', JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch matches', err);
    });



    //db.close();
});