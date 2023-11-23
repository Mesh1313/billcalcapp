import { orderItemIdsAndCount, orderItemsByIdMap } from '@app/state/order';
import { MenuItem, MenuItemsById, OrderItemIdsAndCount, RecoilSet } from '@app/types';

type AddOrderItemFunction = (
  id: MenuItem['id'],
  itemIds: OrderItemIdsAndCount,
  itemsByIdMap: MenuItemsById,
  set: RecoilSet
) => void;

export const addOrderItem: AddOrderItemFunction = (
  id,
  itemIds,
  itemsByIdMap,
  set
) => {
  set(orderItemsByIdMap, (items) => {
    return Object.keys(itemIds).includes(id)
      ? items
      : {
        ...items,
        [id]: itemsByIdMap[id],
      };
  });

  set(orderItemIdsAndCount, (ids) => {
    if (Object.keys(ids).includes(id)) {
      return {
        ...ids,
        [id]: ids[id] + 1,
      };
    } else {
      return {
        ...ids,
        [id]: 1,
      };
    }
  });
};

type RemoveOrderItemFunction = (
  id: MenuItem['id'],
  itemIds: OrderItemIdsAndCount,
  set: RecoilSet
) => void;

export const removeOrderItem: RemoveOrderItemFunction = (
  id,
  itemIds,
  set
) => {
  set(orderItemsByIdMap, (items) => {
    if (itemIds[id] <= 1) {
      const { [id]: removedId, ...updatedItems } = items;
      return updatedItems;
    } else {
      return items;
    }
  });

  set(orderItemIdsAndCount, (ids) => {
    if (ids[id] > 1) {
      return {
        ...ids,
        [id]: ids[id] - 1,
      };
    } else {
      const { [id]: removedId, ...updatedIds } = ids;
      return updatedIds;
    }
  });
};
