import { gql } from 'apollo-server-express';

const userSchema = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }
    
    type Query {
        getUser(id: ID!): User
        getUsers: [User!]
    }

    type Mutation {
        createUser(name: String!, email: String!) : User!
    }
`;

export default userSchema;