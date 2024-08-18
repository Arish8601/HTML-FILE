const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'irfan';
const client = new MongoClient(url);

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(client.db(dbName));
      }
    });
  });
};

const insertDocuments = (db) => {
  const collection = db.collection('mycollection');
  const docs = [
    { name: "Arish", age: 21 },
    { name: "Sadaf", age: 25 },
    { name: "Charlie", age: 35 }
  ];

  return collection.insertMany(docs);
};

connectToDatabase()
  .then((db) => {
    console.log("Connected successfully to server");
    return insertDocuments(db);
  })
  .then((result) => {
    console.log(`${result.insertedCount} documents were inserted`);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    client.close();
  });
