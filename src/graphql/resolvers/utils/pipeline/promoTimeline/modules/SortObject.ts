import { PromoTimelineFilter } from '../../../getPromoTimelineFilter';
import { ObjectId } from 'mongodb';

export class SortObject {
  static builder({ cursor }: PromoTimelineFilter) {
    if (!cursor) return null;
    const [sortAt, _id] = cursor.split('_');
    return { $sort: { sortAt, _id: new ObjectId(_id) } };
  }
}
