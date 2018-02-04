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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    db.collection('Users').deleteMany({ age: 46})
    
    .then((result) => {
        console.log(result);
    }, (err) => {
        console.log('the delete many failed', err);
    });

    
    // db.collection('Users').findOneAndDelete({ _id: new ObjectID("5a76427beae5a535c41e54f3")}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('the find one and delete failed', err);
    // });

// look for any duplicates and delete many



// find one and delete ... doesn't matter which one but delete by id




    //db.close();
});