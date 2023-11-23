import { Tax } from '@app/types';
import { atom } from 'recoil';

export const taxes = atom<Tax[]>({
  key: 'taxesState',
  default: [],
});
