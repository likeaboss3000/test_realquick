import { MongoClient, Db } from 'mongodb';

var client: MongoClient | null = null;
var db: Db | null = null;

export async function mongoConnect() {
  try {
    if (!client) {
      client = await MongoClient.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        wtimeout: 5000,
        useUnifiedTopology: true,
      });
      db = client.db('test_realquick');
    }
    if (!db) db = client.db('test_realquick');
    return { client, db };
  } catch (e) {
    console.log(e);
  }
}
