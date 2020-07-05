import { FacetObject } from './modules/FacetObject';
import { SortObject } from './modules/SortObject';
import { MatchCategoryObject, MatchCursorObject } from './modules/MatchObject';
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
      MatchCategoryObject.builder(filter),
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
