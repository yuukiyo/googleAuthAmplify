// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPizza = /* GraphQL */ `
  mutation CreatePizza(
    $input: CreatePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    createPizza(input: $input, condition: $condition) {
      id
      username
      price
    }
  }
`;
export const updatePizza = /* GraphQL */ `
  mutation UpdatePizza(
    $input: UpdatePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    updatePizza(input: $input, condition: $condition) {
      id
      username
      price
    }
  }
`;
export const deletePizza = /* GraphQL */ `
  mutation DeletePizza(
    $input: DeletePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    deletePizza(input: $input, condition: $condition) {
      id
      username
      price
    }
  }
`;
