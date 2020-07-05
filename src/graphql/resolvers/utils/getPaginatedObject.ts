export function getPaginatedObject({ posts, total }) {
  if (!posts.length) {
    return {
      edges: [],
      pageInfo: null,
    };
  }
  let edges: any[] = [];
  let pageInfo: any;
  const { count } = total[0];
  try {
    posts.forEach((post) => {
      const cursor = `${post.sortAt}_${post._id}`;
      edges.push({ cursor, node: formatPost(post) });
    });
    pageInfo = {
      startCursor: edges[0].cursor,
      endCursor: edges[edges.length - 1].cursor,
      hasNextPage: count > edges.length,
    };
  } catch (e) {}
  return { edges, pageInfo };
}

function formatPost(postValue) {
  const formattedPost = {
    ...postValue,
    hasLiked: postValue.hasLiked ? true : false,
    hasCommented: postValue.hasCommented ? true : false,
    hasBookmarked: postValue.hasBookmarked ? true : false,
  };
  return formattedPost;
}
