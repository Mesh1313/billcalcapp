import { MenuItem } from '@app/components/MenuItem';
import { OnDeleteItemCallback } from '@app/components/MenuItem/types';
import { MenuItem as MenuItemType } from '@app/types';

interface OrderListViewProps {
  orderItems: MenuItemType[];
  onDelete: OnDeleteItemCallback;
};

const getUniqueKey = (idx: number) => `${(new Date).getTime()}-${idx}`;

const OrderListView = ({ orderItems, onDelete }: OrderListViewProps) => {
  return (
    orderItems.map((item, idx) => {
      return (
        <MenuItem
          key={`${item?.id}-${getUniqueKey(idx)}`}
          menuItem={item}
          onDelete={onDelete}
        />
      );
    })
  );
};

export default OrderListView;
