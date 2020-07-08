const RegularUser = {
  async profile({ profile }, args, { ReadModel }) {
    const values = await ReadModel.fetchProfile({ profileId: profile.id });
    console.log(values);
    return values;
  },
  async hasFollowed({ id }, args, { ReadModel, currentUser }) {
    if (!currentUser) return false;
    return ReadModel.hasFollowedUser({ id, currentUserId: currentUser.id });
  },
};

export default RegularUser;
