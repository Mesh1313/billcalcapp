import { discounts, selectedDiscountIds } from '@app/state/discount';
import { DiscountId, DiscountType, RecoilSet } from '@app/types';
import { setRecoil } from 'recoil-nexus';

const fiveOffDiscount = {
  id: DiscountId.FIVE_OFF,
  name: '$5 Off',
  type: DiscountType.FIXED,
  value: 5,
};
const tenPercentOff = {
  id: DiscountId.TEN_PERCENT,
  name: '10% Off',
  type: DiscountType.PERCENT,
  value: 0.1,
};
const twentyPercentOff = {
  id: DiscountId.TWENTY_PERCENT,
  name: '20% Off',
  type: DiscountType.PERCENT,
  value: 0.2,
};

export const seedDiscounts = () => {
  setRecoil(discounts, [
    fiveOffDiscount,
    tenPercentOff,
    twentyPercentOff,
  ]);
};

type SetDiscountFunction = (
  id: DiscountId,
  set: RecoilSet
) => void;

export const setDiscount: SetDiscountFunction = (id, set) => {
  set(selectedDiscountIds, (selectedIds) => {
    if (selectedIds.includes(id)) {
      return selectedIds.filter((_id) => _id !== id);
    }

    // Insure there's only one percentage discount
    if (id === DiscountId.TEN_PERCENT || selectedIds.includes(DiscountId.TWENTY_PERCENT)) {
      return [
        ...selectedIds.filter((_id) => _id !== DiscountId.TWENTY_PERCENT),
        DiscountId.TEN_PERCENT
      ];
    }

    if (id === DiscountId.TWENTY_PERCENT || selectedIds.includes(DiscountId.TEN_PERCENT)) {
      return [
        ...selectedIds.filter((_id) => _id !== DiscountId.TEN_PERCENT),
        DiscountId.TWENTY_PERCENT
      ];
    }

    return [
      ...selectedIds,
      id
    ];
  });
};
