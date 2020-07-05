import Profile from './Profile';

const RegularByRegularUser = {
  async author({ author }, args, { ReadModel }) {
    return ReadModel.fetchUserById({ userId: author.id });
  },
  async profile({ profile }, args, { ReadModel }) {
    return ReadModel.fetchProfile({ profileId: profile.id });
  },
};

export default RegularByRegularUser;
