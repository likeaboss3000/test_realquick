import { ReadModel } from '..';
import { ObjectId } from 'mongodb';

export async function fetchProfile(this: ReadModel, { profileId }) {
  return this.profilesColl.findOne({
    _id: new ObjectId(profileId),
  });
}
