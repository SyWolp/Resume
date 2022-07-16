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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInfos = /* GraphQL */ `
  query SyncInfos(
    $filter: ModelInfosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
