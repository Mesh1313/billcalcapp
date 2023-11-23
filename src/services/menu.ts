import { setRecoil } from 'recoil-nexus';

import { menuItemsByCategory, menuItemsByIdMap } from '@app/state/menu';
import { MenuItem, MenuItemCategory } from '@app/types/menuItem';

const Appetizers: MenuItem[] = [
  {
    id: 'appetizer-nachos',
    name: 'Nachos',
    price: '13.99',
    category: MenuItemCategory.Appetizers,
  },
  {
    id: 'appetizer-calamari',
    name: 'Calamari',
    price: '11.99',
    category: MenuItemCategory.Appetizers,
  },
  {
    id: 'appetizer-caesar',
    name: 'Caesar Salad',
    price: '10.99',
    category: MenuItemCategory.Appetizers,
  },
];
const Mains: MenuItem[] = [
  {
    id: 'mains-burger',
    name: 'Burger',
    price: '9.99',
    category: MenuItemCategory.Mains,
  },
  {
    id: 'mains-hotdog',
    name: 'Hotdog',
    price: '3.99',
    category: MenuItemCategory.Mains,
  },
  {
    id: 'mains-pizza',
    name: 'Pizza',
    price: '12.99',
    category: MenuItemCategory.Mains,
  },
];
const Drinks: MenuItem[] = [
  {
    id: 'drinks-water',
    name: 'Water',
    price: '0.00',
    category: MenuItemCategory.Drinks,
  },
  {
    id: 'drinks-pop',
    name: 'Pop',
    price: '2.00',
    category: MenuItemCategory.Drinks,
  },
  {
    id: 'drinks-orange-juice',
    name: 'Orange Juice',
    price: '3.00',
    category: MenuItemCategory.Drinks,
  },
];
const Alcohol: MenuItem[] = [
  {
    id: 'alcohol-beer',
    name: 'Beer',
    price: '5.00',
    category: MenuItemCategory.Alcohol,
  },
  {
    id: 'alcohol-cider',
    name: 'Cider',
    price: '6.00',
    category: MenuItemCategory.Alcohol,
  },
  {
    id: 'alcohol-wine',
    name: 'Wine',
    price: '7.00',
    category: MenuItemCategory.Alcohol,
  },
];

const itemsMap = {
  [MenuItemCategory.Appetizers]: Appetizers,
  [MenuItemCategory.Mains]: Mains,
  [MenuItemCategory.Drinks]: Drinks,
  [MenuItemCategory.Alcohol]: Alcohol,
};

const itemsByIdMap = [
  ...Appetizers,
  ...Mains,
  ...Drinks,
  ...Alcohol,
].reduce((res, item) => (
  {
    ...res,
    [item.id]: item,
  }
), {});

export const seedMenuItemsByCategory = () => {
  setRecoil(menuItemsByCategory, itemsMap);
  setRecoil(menuItemsByIdMap, itemsByIdMap);
};
