const Post = {
  __resolveType({ postType }) {
    switch (postType) {
      case 'RegularByRegularUser':
        return 'RegularByRegularUser';
      case 'Review':
        return 'Review';
      case 'RegularByBusinessUser':
        return 'RegularByBusinessUser';
      case 'PromoFlyer':
        return 'PromoFlyer';
    }
  },
};

export default Post;
