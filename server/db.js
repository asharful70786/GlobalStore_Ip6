import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017/School';
const client = new MongoClient(url);

async function ConnectDb() {
  await client.connect();
  const db = client.db();
  return db;
};

//this is for disconnect the db Smoothly

process.on('SIGINT', async () => {
  await client.close();
  process.exit(0);
}); 

export default ConnectDb;

