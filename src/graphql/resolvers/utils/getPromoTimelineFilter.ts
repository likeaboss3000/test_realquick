export function getPromoTimelineFilter(
  filter: PromoTimelineFilterInput
): PromoTimelineFilter {
  let promoTimelineFilter: any;
  try {
    const { cursor, limit, category } = filter;
    if (limit > 30) {
      throw new Error('Cannot fetch more than 30 promos at once');
    }
    if (limit < 1) {
      throw new Error('Cannot fetch less than 1 promo at once');
    }
    promoTimelineFilter.limit = limit ? limit : 10;
    promoTimelineFilter.cursor = cursor ? cursor : null;
    promoTimelineFilter.category = category[0];
  } catch (e) {
    if (e.name === 'Error') {
      e.name = 'FilterError';
    }
    throw e;
  }
  return promoTimelineFilter;
}

export interface PromoTimelineFilterInput {
  limit?: number;
  cursor?: string;
  category: string[];
}

export interface PromoTimelineFilter {
  limit: number;
  cursor: string | null;
  category: string;
}
