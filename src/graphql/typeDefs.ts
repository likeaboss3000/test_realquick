import { gql } from 'apollo-server';
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const pathToSchema = path.join(__dirname, './schema');
const schema = glob
  .sync(`${pathToSchema}/**/*.graphql`)
  .map((file) => fs.readFileSync(file, { encoding: 'utf8' }));

const typeDefs = gql`
  ${schema}
`;

export default typeDefs;
