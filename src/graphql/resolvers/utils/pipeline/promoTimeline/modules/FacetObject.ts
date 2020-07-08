import { ObjectId } from 'mongodb';
import { PromoTimelineFilter } from '../../../getPromoTimelineFilter';

const unset = {
  $unset: ['likedBy', 'commentedBy', 'bookmarkedBy', 'bumpedAt'],
};

export class FacetObject {
  static builder({ limit }: PromoTimelineFilter, id: string | null) {
    return id
      ? {
          $facet: {
            total: [{ $count: 'count' }],
            promos: [
              { $limit: limit },
              {
                $addFields: {
                  hasLiked: { $in: [new ObjectId(id), '$likedBy._id'] },
                  hasCommented: { $in: [new ObjectId(id), '$commentedBy._id'] },
                  hasBookmarked: {
                    $in: [new ObjectId(id), '$bookmarkedBy._id'],
                  },
                },
              },
              unset,
            ],
          },
        }
      : {
          $facet: {
            total: [{ $count: 'count' }],
            promos: [{ $limit: limit }, unset],
          },
        };
  }
}
