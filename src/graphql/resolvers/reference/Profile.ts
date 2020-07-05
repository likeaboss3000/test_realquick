import { PostsFilterInput, getPostsFilter } from '../utils/getPostsFilter';
import { getProfileTimelinePipeline } from '../utils/pipeline/profileTimeline';
import { getPaginatedObject } from '../utils/getPaginatedObject';

const Profile = {
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
      const pipeline = getProfileTimelinePipeline({
        currentUser,
        filter: postsFilter,
        profileId: id,
      });
      const { posts, total } = await ReadModel.getProfileTimeline(pipeline);
      const postConnection = getPaginatedObject({ posts, total });

      return { status: 200, profileTimeline: postConnection, userErrors: [] };
    } catch (e) {
      return {
        status: 400,
        storeTimeline: { edges: [], pageInfo: null },
        userErrors: [{ type: e.name, message: e.message }],
      };
    }
  },
};

export default Profile;
