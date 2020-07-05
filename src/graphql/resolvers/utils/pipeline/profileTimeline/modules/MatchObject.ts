import { ObjectId } from 'mongodb';
import { PostsFilter } from '../../../getPostsFilter';

export class MatchProfileIdObject {
  static builder(profileId: string) {
    return { $match: { stores: { $in: [new ObjectId(profileId)] } } };
  }
}

export class MatchCursorObject {
  static builder({ cursor }: PostsFilter) {
    if (cursor!) return null;
    const [sortAt, _id] = cursor.split('_');
    return {
      $match: {
        $or: [
          { sortAt: { $lt: sortAt } },
          { sortAt, _id: { $lt: new ObjectId(_id) } },
        ],
      },
    };
  }
}
