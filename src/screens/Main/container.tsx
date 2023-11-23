import { useRecoilCallback, useRecoilValue } from 'recoil';

import { MenuItem } from '@app/types';
import {
  menuItemsByCategory as menuItemsByCategoryState,
  menuItemsByIdMap
} from '@app/state/menu';
import { orderItemDisplayList, orderItemIdsAndCount } from '@app/state/order';

import MainScreenView from './screen';
import { addOrderItem, removeOrderItem } from '@app/services/order';

const MainScreenContainer = () => {
  const menuItemsByCategory = useRecoilValue(menuItemsByCategoryState);
  const orderItems = useRecoilValue(orderItemDisplayList);

  const onItemPress = useRecoilCallback(({ set, snapshot }) => async (id: MenuItem['id']) => {
    const itemsByIdMap = await snapshot.getPromise(menuItemsByIdMap);
    const itemIds = await snapshot.getPromise(orderItemIdsAndCount);

    addOrderItem(
      id,
      itemIds,
      itemsByIdMap,
      set
    );
  }, []);

  const onItemDelete = useRecoilCallback(({ set, snapshot }) => async (id: string) => {
    const itemIds = await snapshot.getPromise(orderItemIdsAndCount);

    removeOrderItem(
      id,
      itemIds,
      set
    );
  });

  return (
    <MainScreenView
      menuItemsByCategory={menuItemsByCategory}
      orderItems={orderItems}
      onItemPress={onItemPress}
      onItemDelete={onItemDelete}
    />
  );
};

export default MainScreenContainer;
