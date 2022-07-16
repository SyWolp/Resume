/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInfosInput = {
  kname: string,
  ename: string,
  age: number,
  adr: string,
  gender: string,
  cp: number,
  img: string,
  id?: string | null,
  _version?: number | null,
};

export type ModelInfosConditionInput = {
  kname?: ModelStringInput | null,
  ename?: ModelStringInput | null,
  age?: ModelIntInput | null,
  adr?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  cp?: ModelIntInput | null,
  img?: ModelStringInput | null,
  and?: Array< ModelInfosConditionInput | null > | null,
  or?: Array< ModelInfosConditionInput | null > | null,
  not?: ModelInfosConditionInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Infos = {
  __typename: "Infos",
  kname: string,
  ename: string,
  age: number,
  adr: string,
  gender: string,
  cp: number,
  img: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateInfosInput = {
  kname?: string | null,
  ename?: string | null,
  age?: number | null,
  adr?: string | null,
  gender?: string | null,
  cp?: number | null,
  img?: string | null,
  id: string,
  _version?: number | null,
};

export type DeleteInfosInput = {
  id: string,
  _version?: number | null,
};

export type ModelInfosFilterInput = {
  kname?: ModelStringInput | null,
  ename?: ModelStringInput | null,
  age?: ModelIntInput | null,
  adr?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  cp?: ModelIntInput | null,
  img?: ModelStringInput | null,
  and?: Array< ModelInfosFilterInput | null > | null,
  or?: Array< ModelInfosFilterInput | null > | null,
  not?: ModelInfosFilterInput | null,
};

export type ModelInfosConnection = {
  __typename: "ModelInfosConnection",
  items:  Array<Infos | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateInfosMutationVariables = {
  input: CreateInfosInput,
  condition?: ModelInfosConditionInput | null,
};

export type CreateInfosMutation = {
  createInfos?:  {
    __typename: "Infos",
    kname: string,
    ename: string,
    age: number,
    adr: string,
    gender: string,
    cp: number,
    img: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateInfosMutationVariables = {
  input: UpdateInfosInput,
  condition?: ModelInfosConditionInput | null,
};

export type UpdateInfosMutation = {
  updateInfos?:  {
    __typename: "Infos",
    kname: string,
    ename: string,
    age: number,
    adr: string,
    gender: string,
    cp: number,
    img: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteInfosMutationVariables = {
  input: DeleteInfosInput,
  condition?: ModelInfosConditionInput | null,
};

export type DeleteInfosMutation = {
  deleteInfos?:  {
    __typename: "Infos",
    kname: string,
    ename: string,
    age: number,
    adr: string,
    gender: string,
    cp: number,
    img: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetInfosQueryVariables = {
  id: string,
};

export type GetInfosQuery = {
  getInfos?:  {
    __typename: "Infos",
    kname: string,
    ename: string,
    age: number,
    adr: string,
    gender: string,
    cp: number,
    img: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListInfosQueryVariables = {
  filter?: ModelInfosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInfosQuery = {
  listInfos?:  {
    __typename: "ModelInfosConnection",
    items:  Array< {
      __typename: "Infos",
      kname: string,
      ename: string,
      age: number,
      adr: string,
      gender: string,
      cp: number,
      img: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncInfosQueryVariables = {
  filter?: ModelInfosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncInfosQuery = {
  syncInfos?:  {
    __typename: "ModelInfosConnection",
    items:  Array< {
      __typename: "Infos",
      kname: string,
      ename: string,
      age: number,
      adr: string,
      gender: string,
      cp: number,
      img: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateInfosSubscription = {
  onCreateInfos?:  {
    __typename: "Infos",
    kname: string,
    ename: string,
    age: number,
    adr: string,
    gender: string,
    cp: number,
    img: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateInfosSubscription = {
  onUpdateInfos?:  {
    __typename: "Infos",
    kname: string,
    ename: string,
    age: number,
    adr: string,
    gender: string,
    cp: number,
    img: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteInfosSubscription = {
  onDeleteInfos?:  {
    __typename: "Infos",
    kname: string,
    ename: string,
    age: number,
    adr: string,
    gender: string,
    cp: number,
    img: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
