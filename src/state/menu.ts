import { atom } from 'recoil';

import { MenuItemsByCategory, MenuItemsById } from '@app/types';

export const menuItemsByCategory = atom<MenuItemsByCategory>({
  key: 'menuItemsByCategory',
  default: {},
});

export const menuItemsByIdMap = atom<MenuItemsById>({
  key: 'menuItemsByIdMap',
  default: {},
});
