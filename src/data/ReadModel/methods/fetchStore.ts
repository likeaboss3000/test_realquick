import { ReadModel } from '..';
import { ObjectId } from 'mongodb';

export async function fetchStore(this: ReadModel, { storeId }) {
  return this.storesColl.findOne({ _id: new ObjectId(storeId) });
}
