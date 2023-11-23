import { seedDiscounts } from './discount';
import { seedMenuItemsByCategory } from './menu';
import { seedTaxValues } from './tax';

export const setAppData = () => {
  seedDiscounts();
  seedMenuItemsByCategory();
  seedTaxValues();
};
