export const typeDefs = `
  #graphql

  type Cat {
    id: ID!,
    name: String!
    imageSrc: String!
  }

  type Query {
    getCats: [Cat]
  }

`;
