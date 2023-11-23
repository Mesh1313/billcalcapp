import { atom, selector } from 'recoil';

import { MenuItem, OrderItemIdsAndCount } from '@app/types';

export const orderItemsByIdMap = atom<Record<string, MenuItem>>({
  key: 'orderItems',
  default: {},
});

export const orderItemIdsAndCount = atom<OrderItemIdsAndCount>({
  key: 'orderItemIds',
  default: {},
});

export const orderItemDisplayList = selector({
  key: 'orderItemDisplayList',
  get: ({ get }) => {
    const itemsByIdMap = get(orderItemsByIdMap);
    const idsAndCount = get(orderItemIdsAndCount);

    const itemsToDisplayList = Object.keys(idsAndCount).reduce((res, itemId) => {
      const itemData = itemsByIdMap[itemId];
      const repeat = idsAndCount[itemId];

      if (repeat > 1) {
        return [
          ...res,
          ...Array.from(Array(repeat)).map(()=> itemData)
        ];
      } else {
        return itemData
          ? [
            ...res,
            itemData,
          ]
          : res;
      }
    }, [] as MenuItem[]);

    return itemsToDisplayList;
  },
});
