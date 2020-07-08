import { FacetObject } from './modules/FacetObject';
import { SortObject } from './modules/SortObject';
import {
  MatchCategoryObject,
  MatchCursorObject,
  MatchPostTypeObject,
} from './modules/MatchObject';
import { PromoTimelineFilter } from '../../getPromoTimelineFilter';

export function getPromoTimelinePipeline({
  currentUser,
  filter,
}: {
  currentUser: any;
  filter: PromoTimelineFilter;
}) {
  let pipeline: any[] = [];
  try {
    const array = [
      MatchPostTypeObject.builder({ postType: 'PromoFlyer' }),
      MatchCategoryObject.builder(filter),
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
