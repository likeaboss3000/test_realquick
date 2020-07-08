import { ObjectId } from 'mongodb';
import { PromoTimelineFilter } from '../../../getPromoTimelineFilter';

export class MatchPostTypeObject {
  static builder({ postType }) {
    return { $match: { postType } };
  }
}

export class MatchCategoryObject {
  static builder({ category }: PromoTimelineFilter) {
    return { $match: { category: { $in: [category] } } };
  }
}

export class MatchCursorObject {
  static builder({ cursor }: PromoTimelineFilter) {
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
