import { ObjectId } from 'mongodb';
import { PostsFilter } from '../../../getPostsFilter';

export class SortObject {
  static builder({ cursor }: PostsFilter) {
    if (!cursor) return null;
    const [sortAt, _id] = cursor.split('_');
    return { $sort: { sortAt, _id: new ObjectId(_id) } };
  }
}
