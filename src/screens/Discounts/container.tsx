import { useRecoilCallback, useRecoilValue } from 'recoil';

import { discounts as discountsState, selectedDiscountIds } from '@app/state/discount';

import DiscountsScreenView from './screen';
import { DiscountId } from '@app/types';
import { setDiscount } from '@app/services/discount';

const DiscountScreenContainer = () => {
  const discounts = useRecoilValue(discountsState);
  const selectedIds = useRecoilValue(selectedDiscountIds);

  const onSelectDiscount = useRecoilCallback(({ set }) => (id: DiscountId) => {
    setDiscount(id, set);
  }, []);

  return (
    <DiscountsScreenView
      discounts={discounts}
      selectedDiscountIds={selectedIds}
      onSelectDiscount={onSelectDiscount}
    />
  );
};

export default DiscountScreenContainer;
