import { setRecoil } from 'recoil-nexus';

import { MenuItemCategory, Tax } from '@app/types';
import { taxes } from '@app/state/tax';

const tax5: Tax = {
  value: 0.05,
  applicableCategory: [],
};

const tax8: Tax = {
  value: 0.08,
  applicableCategory: [],
};

const taxAlcohol: Tax = {
  value: 0.1,
  applicableCategory: [MenuItemCategory.Alcohol],
};

export const seedTaxValues = () => {
  setRecoil(taxes, [
    tax5,
    tax8,
    taxAlcohol
  ]);
};
