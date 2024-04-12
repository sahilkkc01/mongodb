//Estabilishing connection with mongodb
const{MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'MyDataBase';


async function main(){
    await client.connect();
    console.log("Connected to server ")
    //db has refrance to database MyDataBase
    const db = client.db(dbName);
    //collection has refrance to collection users of db
    const collection = db.collection('users')
  
    const findResult =await collection.find().toArray();
    console.log(findResult);
}

main();