import { ObjectId } from 'mongodb';
import { PromoTimelineFilter } from '../../../getPromoTimelineFilter';

export class MatchCategoryObject {
  static builder({ category }: PromoTimelineFilter) {
    return { $match: { category } };
  }
}

export class MatchCursorObject {
  static builder({ cursor }: PromoTimelineFilter) {
    return cursor
      ? {
          $match: {
            $or: [
              { sortAt: { $lt: cursor.split('_')[0] } },
              {
                sortAt: cursor.split('_')[0],
                _id: { $lt: new ObjectId(cursor.split('_')[1]) },
              },
            ],
          },
        }
      : null;
  }
}
