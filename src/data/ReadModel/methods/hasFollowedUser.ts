import { ObjectId } from 'mongodb';
import { ReadModel } from '..';

export async function hasFollowedUser(this: ReadModel, { id, currentUserId }) {
  try {
    const hasFollowed = await this.usersColl.findOne({
      _id: new ObjectId(currentUserId),
      'followings.id': new ObjectId(id),
    });
    return hasFollowed ? true : false;
  } catch (e) {
    throw e;
  }
}
