import { gql } from 'apollo-server';

const scalarTypes = `
  scalar Date
`

const todoTypes = `
  type Todo {
    id: ID!
    label: String!
    isDone: Boolean

    createdAt: Date!
    updatedAt: Date!
  }

  input TodoInput {
    label: String!
    isDone: Boolean
  }
`

const typeDefs = gql`
  ${scalarTypes}
  ${todoTypes}

  type Query {
    hello: String!
    todos: [Todo]!
  }

  type Mutation {
    createTodo(todo: TodoInput!): Todo!
  }


`;

export { typeDefs }