import { ReadModel } from '..';
import { ObjectId } from 'mongodb';

export async function fetchUserById(this: ReadModel, { userId }) {
  return this.usersColl.findOne({ _id: new ObjectId(userId) });
}
