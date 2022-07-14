/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInfos = /* GraphQL */ `
  mutation CreateInfos(
    $input: CreateInfosInput!
    $condition: ModelInfosConditionInput
  ) {
    createInfos(input: $input, condition: $condition) {
      kname
      ename
      age
      adr
      gender
      cp
      img
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateInfos = /* GraphQL */ `
  mutation UpdateInfos(
    $input: UpdateInfosInput!
    $condition: ModelInfosConditionInput
  ) {
    updateInfos(input: $input, condition: $condition) {
      kname
      ename
      age
      adr
      gender
      cp
      img
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteInfos = /* GraphQL */ `
  mutation DeleteInfos(
    $input: DeleteInfosInput!
    $condition: ModelInfosConditionInput
  ) {
    deleteInfos(input: $input, condition: $condition) {
      kname
      ename
      age
      adr
      gender
      cp
      img
      id
      createdAt
      updatedAt
    }
  }
`;
