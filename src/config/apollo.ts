import { MongoClient } from 'mongodb';
import { ApolloServer } from 'apollo-server';
import jwt from 'jsonwebtoken';

var server: ApolloServer | null;

export async function launchApolloServer(client: MongoClient): ApolloServer {
  try {
    if (server) return server;
    server = new ApolloServer({
      schema,
      context: async ({ req, res }) => {
        let currentUser;
        try {
          const token = req.headers.authorization
            ? req.headers.authorization.replace('Bearer ', '')
            : null;
          if (!token) currentUser = null;
          const { userId } = jwt.verify(token, process.env.JWT_SECRET);
        } catch (e) {
          console.log(`Unable to authenticate currentUser, ${e}`);
          currentUser = null;
        }
        return {
          req,
          res,
          currentUser,
        };
      },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
}
