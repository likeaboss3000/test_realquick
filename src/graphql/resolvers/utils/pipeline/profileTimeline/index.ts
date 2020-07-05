import { FacetObject } from './modules/FacetObject';
import { SortObject } from './modules/SortObject';
import { MatchProfileIdObject, MatchCursorObject } from './modules/MatchObject';
import { PostsFilter } from '../../getPostsFilter';

export function getProfileTimelinePipeline({
  profileId,
  filter,
  currentUser,
}: {
  profileId: string;
  filter: PostsFilter;
  currentUser: any;
}) {
  let pipeline: any[] = [];
  try {
    const array = [
      MatchProfileIdObject.builder(profileId),
      MatchCursorObject.builder(filter),
      SortObject.builder(filter),
      FacetObject.builder(filter, currentUser.id),
    ];
    array.forEach((object) => {
      if (object) pipeline.push(object);
    });
  } catch (e) {
    throw e;
  }
  return pipeline;
}
