import { Discount, DiscountId } from '@app/types';
import { atom, selector } from 'recoil';

export const selectedDiscountIds = atom<DiscountId[]>({
  key: 'selectedDiscountIds',
  default: [],
});

export const discounts = atom<Discount[]>({
  key: 'discounts',
  default: []
});

export const selectedDiscounts = selector({
  key: 'selectedDiscount',
  get: ({ get }) => {
    const discountsList = get(discounts);
    const discountIds = get(selectedDiscountIds);
    const discountsData = discountIds.map((discountId) => discountsList.filter((d) => d.id === discountId)[0]);

    return discountsData;
  },
});
