import { FacetObject } from './modules/FacetObject';
import { SortObject } from './modules/SortObject';
import { MatchCursorObject, MatchStoreIdObject } from './modules/MatchObject';
import { PostsFilter } from '../../getPostsFilter';

export function getStoreTimelinePipeline({
  currentUser,
  filter,
  storeId,
}: {
  storeId: string;
  currentUser: any;
  filter: PostsFilter;
}) {
  let pipeline: any[] = [];
  try {
    const array = [
      MatchStoreIdObject.builder(storeId),
      MatchCursorObject.builder(filter),
      SortObject.builder(),
      FacetObject.builder(filter, currentUser ? currentUser.id : null),
    ];
    array.forEach((object) => {
      if (object) pipeline.push(object);
    });
  } catch (e) {
    throw e;
  }
  return pipeline;
}
