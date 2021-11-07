import { gql } from 'apollo-server-express';

const User = gql`
  type User {
    id: ID!
    username: String
    firstName: String
    lastName: String
    password: String
  }
`;

export default User;