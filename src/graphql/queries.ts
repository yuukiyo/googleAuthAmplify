// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPizza = /* GraphQL */ `
  query GetPizza($id: ID!) {
    getPizza(id: $id) {
      id
      username
      price
    }
  }
`;
export const listPizzas = /* GraphQL */ `
  query ListPizzas(
    $filter: ModelPizzaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPizzas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        price
      }
      nextToken
    }
  }
`;
