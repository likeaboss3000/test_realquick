import { ReadModel } from '..';

export async function fetchStores(this: ReadModel, { storeIds }) {
  return this.storesColl.find({ _id: { $in: storeIds } }).toArray();
}
