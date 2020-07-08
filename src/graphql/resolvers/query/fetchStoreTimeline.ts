import { PostsFilterInput, getPostsFilter } from '../utils/getPostsFilter';
import { getPaginatedObject } from '../utils/getPaginatedObject';
import { getStoreTimelinePipeline } from '../utils/pipeline/storeTimeline';

export async function fetchStoreTimeline(
  parent,
  { storeId, filter }: { storeId: string; filter: PostsFilterInput },
  { ReadModel, currentUser }
) {
  try {
    const postsFilter = getPostsFilter(filter);
    const pipeline = getStoreTimelinePipeline({
      currentUser,
      filter: postsFilter,
      storeId,
    });

    const { posts, total } = await ReadModel.getStoreTimeline(pipeline);
    const postConnection = getPaginatedObject({ posts, total });

    return { status: 200, storeTimeline: postConnection, userErrors: [] };
  } catch (e) {
    return {
      status: 400,
      storeTimeline: { edges: [], pageInfo: null },
      userErrors: [{ type: e.name, message: e.message }],
    };
  }
}
