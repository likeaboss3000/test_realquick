export function getPostsFilter(filter: PostsFilterInput): PostsFilter {
  let postsFilter: any;
  try {
    const { cursor, limit } = filter;
    if (limit > 30) {
      throw new Error('Cannot fetch more than 30 promos at once');
    }
    if (limit < 1) {
      throw new Error('Cannot fetch less than 1 promo at once');
    }
    postsFilter.limit = limit ? limit : 10;
    postsFilter.cursor = cursor ? cursor : null;
  } catch (e) {
    if (e.name === 'Error') {
      e.name = 'FilterError';
    }
    throw e;
  }
  return postsFilter;
}

export interface PostsFilterInput {
  limit?: number;
  cursor?: string;
}

export interface PostsFilter {
  limit: number;
  cursor: string | null;
}
