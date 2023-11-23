export type MenuItem = {
  id: string;
  name: string;
  price: string;
  category: number;
};

export enum MenuItemCategory {
  Appetizers,
  Mains,
  Drinks,
  Alcohol,
}

export type MenuItemsByCategory = Record<string, MenuItem[]>;

export type MenuItemsById = Record<string, MenuItem>;

export type OnItemPress = (id: MenuItem['id']) => void;
