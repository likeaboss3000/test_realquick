import { ReadModel } from '..';

export async function fetchStore(this: ReadModel, { storeId }) {
  return this.storesColl.findOne({ _id: storeId });
}
