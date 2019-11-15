/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePizzaInput = {
  id?: string | null,
  username: string,
  price?: string | null,
};

export type ModelPizzaConditionInput = {
  username?: ModelStringInput | null,
  price?: ModelStringInput | null,
  and?: Array< ModelPizzaConditionInput | null > | null,
  or?: Array< ModelPizzaConditionInput | null > | null,
  not?: ModelPizzaConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePizzaInput = {
  id: string,
  username?: string | null,
  price?: string | null,
};

export type DeletePizzaInput = {
  id?: string | null,
};

export type ModelPizzaFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  price?: ModelStringInput | null,
  and?: Array< ModelPizzaFilterInput | null > | null,
  or?: Array< ModelPizzaFilterInput | null > | null,
  not?: ModelPizzaFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreatePizzaMutationVariables = {
  input: CreatePizzaInput,
  condition?: ModelPizzaConditionInput | null,
};

export type CreatePizzaMutation = {
  createPizza:  {
    __typename: "Pizza",
    id: string,
    username: string,
    price: string | null,
  } | null,
};

export type UpdatePizzaMutationVariables = {
  input: UpdatePizzaInput,
  condition?: ModelPizzaConditionInput | null,
};

export type UpdatePizzaMutation = {
  updatePizza:  {
    __typename: "Pizza",
    id: string,
    username: string,
    price: string | null,
  } | null,
};

export type DeletePizzaMutationVariables = {
  input: DeletePizzaInput,
  condition?: ModelPizzaConditionInput | null,
};

export type DeletePizzaMutation = {
  deletePizza:  {
    __typename: "Pizza",
    id: string,
    username: string,
    price: string | null,
  } | null,
};

export type GetPizzaQueryVariables = {
  id: string,
};

export type GetPizzaQuery = {
  getPizza:  {
    __typename: "Pizza",
    id: string,
    username: string,
    price: string | null,
  } | null,
};

export type ListPizzasQueryVariables = {
  filter?: ModelPizzaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPizzasQuery = {
  listPizzas:  {
    __typename: "ModelPizzaConnection",
    items:  Array< {
      __typename: "Pizza",
      id: string,
      username: string,
      price: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePizzaSubscription = {
  onCreatePizza:  {
    __typename: "Pizza",
    id: string,
    username: string,
    price: string | null,
  } | null,
};

export type OnUpdatePizzaSubscription = {
  onUpdatePizza:  {
    __typename: "Pizza",
    id: string,
    username: string,
    price: string | null,
  } | null,
};

export type OnDeletePizzaSubscription = {
  onDeletePizza:  {
    __typename: "Pizza",
    id: string,
    username: string,
    price: string | null,
  } | null,
};
