import { ObjectId } from 'mongodb';
import { PostsFilter } from '../../../getPostsFilter';

export class MatchStoreIdObject {
  static builder(storeId: string) {
    return { $match: { 'stores.id': new ObjectId(storeId) } };
  }
}

export class MatchCursorObject {
  static builder({ cursor }: PostsFilter) {
    if (!cursor) return null;
    const [sortAt, _id] = cursor.split('_');
    return {
      $match: {
        $or: [
          { sortAt: { $lt: parseInt(sortAt) } },
          { sortAt: parseInt(sortAt), _id: { $lt: new ObjectId(_id) } },
        ],
      },
    };
  }
}
