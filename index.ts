import { ApolloServer } from 'apollo-server';
import { mongoConnect } from './src/config/mongo';
import resolvers from './src/graphql/resolvers';
import typeDefs from './src/graphql/typeDefs';
import { ReadModel } from './src/data/ReadModel';
import { CurrentUser } from './src/graphql/resolvers/utils/generateToken';
import * as jwt from 'jsonwebtoken';
require('dotenv').config();

(async function start() {
  try {
    const { client } = await mongoConnect();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req, res }) => {
        let currentUser;
        try {
          const token = req.headers.authorization
            ? req.headers.authorization.replace('Bearer ', '')
            : null;
          if (!token) {
            currentUser = null;
          } else {
            const payload = jwt.verify(
              token,
              process.env.JWT_SECRET
            ) as CurrentUser;
            currentUser = {
              id: payload.sub,
              userType: payload.userType,
            };
          }
        } catch (e) {
          console.log(`Unable to authenticate currentUser, ${e}`);
          currentUser = null;
        }
        return {
          req,
          res,
          currentUser,
          ReadModel: new ReadModel(client),
        };
      },
    });

    server.listen({ port: 9000 }).then(({ url }) => {
      console.log(`server starts at ${url}`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
