import { ObjectId } from 'mongodb';
import { ReadModel } from '..';

export async function hasFollowedUser(this: ReadModel, { id, currentUserId }) {
  try {
    const hasFollowed = this.usersColl.findOne({
      _id: new ObjectId(currentUserId),
      'followings._id': new ObjectId(id),
    });
    return hasFollowed ? true : false;
  } catch (e) {
    throw e;
  }
}
