import { ObjectId } from 'mongodb';
import { PostsFilter } from '../../../getPostsFilter';

const unset = {
  $unset: ['likedBy', 'commentedBy', 'bookmarkedBy', 'bumpedAt'],
};

export class FacetObject {
  static builder({ limit }: PostsFilter, id: string) {
    return id
      ? {
          $facet: {
            total: [{ $count: 'count' }],
            posts: [
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
