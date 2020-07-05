const RegularByBusinessUser = {
  async author({ author }, args, { ReadModel }) {
    return ReadModel.fetchUserById({ userId: author.id });
  },
  async stores({ stores }, args, { ReadModel }) {
    const storeIds = stores.map(({ id }) => id);
    return await ReadModel.fetchStores({ storeIds });
  },
};

export default RegularByBusinessUser;
