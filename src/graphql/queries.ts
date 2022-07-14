/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInfos = /* GraphQL */ `
  query GetInfos($id: ID!) {
    getInfos(id: $id) {
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
export const listInfos = /* GraphQL */ `
  query ListInfos(
    $filter: ModelInfosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
