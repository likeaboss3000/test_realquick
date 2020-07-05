const RegularUser = {
  async profile({ profile }, args, { ReadModel }) {
    return ReadModel.fetchProfile({ profileId: profile.id });
  },
  async hasFollowed({ id, hasFollowed }, args, { ReadModel, currentUser }) {
    if (hasFollowed) return hasFollowed;
    if (!currentUser) return false;
    return ReadModel.hasFollowedUser({ id, currentUserId: currentUser.id });
  },
};

export default RegularUser;
