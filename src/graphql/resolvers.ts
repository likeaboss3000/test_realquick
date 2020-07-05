import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import User from './resolvers/reference/User';
import Profile from './resolvers/reference/Profile';
import Store from './resolvers/reference/Store';
import RegularUser from './resolvers/reference/RegularUser';
import BusinessUser from './resolvers/reference/BusinessUser';
import RegularByRegularUser from './resolvers/reference/RegularByRegularUser';
import RegularByBusinessUser from './resolvers/reference/RegularByBusinessUser';
import PromoFlyer from './resolvers/reference/PromoFlyer';
import Post from './resolvers/reference/Post';

const resolvers = {
  Query,
  Mutation,
  User,
  Profile,
  Store,
  RegularUser,
  BusinessUser,
  Post,
  RegularByRegularUser,
  RegularByBusinessUser,
  PromoFlyer,
};

export default resolvers;
