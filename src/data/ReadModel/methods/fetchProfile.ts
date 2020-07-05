import { ReadModel } from '..';

export async function fetchProfile(this: ReadModel, { profileId }) {
  return this.profilesColl.findOne({ _id: profileId });
}
