import { PostsFilterInput, getPostsFilter } from '../utils/getPostsFilter';
import { getPaginatedObject } from '../utils/getPaginatedObject';
import { getProfileTimelinePipeline } from '../utils/pipeline/profileTimeline';

export async function fetchProfileTimeline(
  parent,
  { profileId, filter }: { profileId: string; filter: PostsFilterInput },
  { ReadModel, currentUser }
) {
  try {
    const postsFilter = getPostsFilter(filter);
    const pipeline = getProfileTimelinePipeline({
      currentUser,
      filter: postsFilter,
      profileId,
    });
    const { posts, total } = await ReadModel.getProfileTimeline(pipeline);
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
