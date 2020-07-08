import { getPromoTimelinePipeline } from '../utils/pipeline/promoTimeline';
import {
  PromoTimelineFilterInput,
  getPromoTimelineFilter,
} from '../utils/getPromoTimelineFilter';
import { getPaginatedObject } from '../utils/getPaginatedObject';

export async function fetchPromoTimeline(
  parent,
  { filter }: { filter: PromoTimelineFilterInput },
  { ReadModel, currentUser }
) {
  try {
    const promoTimelineFilter = getPromoTimelineFilter(filter);
    const pipeline = getPromoTimelinePipeline({
      currentUser,
      filter: promoTimelineFilter,
    });
    const { promos, total } = await ReadModel.getPromoTimeline(pipeline);
    const promoConnection = getPaginatedObject({ posts: promos, total });

    return { status: 200, promoTimeline: promoConnection, userErrors: [] };
  } catch (e) {
    return {
      status: 400,
      promoTimeline: { edges: [], pageInfo: null },
      userErrors: [{ type: e.name, message: e.message }],
    };
  }
}
