import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type InfosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Infos {
  readonly id: string;
  readonly kname: string;
  readonly ename: string;
  readonly age: number;
  readonly adr: string;
  readonly gender: string;
  readonly cp: number;
  readonly img: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Infos, InfosMetaData>);
  static copyOf(source: Infos, mutator: (draft: MutableModel<Infos, InfosMetaData>) => MutableModel<Infos, InfosMetaData> | void): Infos;
}