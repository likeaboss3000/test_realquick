import { PostsFilterInput, getPostsFilter } from '../utils/getPostsFilter';
import { getStoreTimelinePipeline } from '../utils/pipeline/storeTimeline';
import { getPaginatedObject } from '../utils/getPaginatedObject';

const Store = {
  async owner({ owner }, args, { ReadModel }) {
    return ReadModel.fetchUserById({ userId: owner.id });
  },
  async posts(
    { id },
    { filter }: { filter: PostsFilterInput },
    { ReadModel, currentUser }
  ) {
    try {
      const postsFilter = getPostsFilter(filter);
      const pipeline = getStoreTimelinePipeline({
        currentUser,
        filter: postsFilter,
        storeId: id,
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
  },
};

export default Store;
