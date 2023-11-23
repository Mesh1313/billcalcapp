import { MenuItem as MenuItemType, MenuItemsByCategory, MenuItemCategory, OnItemPress } from '@app/types';
import { MenuItem } from '@app/components/MenuItem';
import { MenuHeader } from '@app/components/MenuHeader';
import { View } from 'react-native';

interface MenuListViewProps {
  menuItemsByCategory: MenuItemsByCategory;
  onItemPress: OnItemPress;
};

const MenuListView = ({ menuItemsByCategory, onItemPress }: MenuListViewProps) => {
  const renderItemsList = (itemsList: MenuItemType[]) => {
    return itemsList.map((item) => {
      return (
        <MenuItem
          key={item.id}
          menuItem={item}
          onPress={onItemPress}
        />
      );
    });
  };

  return (
    Object.keys(menuItemsByCategory).map((category: string) => {
      const categoryName = MenuItemCategory[category as keyof typeof MenuItemCategory];

      return (
        <View key={`${categoryName}`}>
          <MenuHeader title={`${categoryName}`}/>
          {renderItemsList(menuItemsByCategory[category])}
        </View>
      );
    })
  );
};

export default MenuListView;
