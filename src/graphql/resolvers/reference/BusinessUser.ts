const BusinessUser = {
  async stores({ stores }, args, { ReadModel }) {
    const storeIds = stores.map(({ id }) => id);
    return ReadModel.fetchStores({ storeIds });
  },
  async hasFollowed({ id }, args, { ReadModel, currentUser }) {
    if (!currentUser) return false;
    return ReadModel.hasFollowedUser({ id, currentUserId: currentUser.id });
  },
};

export default BusinessUser;
