import { ReadModel } from '..';
import { ObjectId } from 'mongodb';

export async function fetchStores(this: ReadModel, { storeIds }) {
  const ids = storeIds.map(({ id }) => new ObjectId(id));
  return this.storesColl.find({ _id: { $in: ids } }).toArray();
}
