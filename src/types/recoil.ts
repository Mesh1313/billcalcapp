import { RecoilState } from 'recoil';

export type RecoilSet = <T>(recoilVal: RecoilState<T>, valOrUpdater: ((currVal: T) => T) | T) => void;
