import { selector } from 'recoil';

import { orderItemDisplayList } from './order';
import { selectedDiscounts } from './discount';
import { taxes } from './tax';
import {
  calculateDiscountValue,
  calculateSubtotal,
  calculateTaxValue,
  calculateTotalValue
} from '@app/services/orderCalculator';

export const totalSelector = selector({
  key: 'totalSelector',
  get: ({ get }) => {
    const orderItems = get(orderItemDisplayList)
    const discounts = get(selectedDiscounts);
    const taxesArr = get(taxes);

    const subtotalSum = calculateSubtotal(orderItems);

    // Calculate taxSum applying taxes to each item
    const taxesSum = subtotalSum === 0
      ? 0
      : calculateTaxValue(orderItems, taxesArr);

    // Calculate discount after taxes applied to subtotal
    const subtotalWithTaxesApplied = subtotalSum + taxesSum;

    const discountSum = subtotalSum === 0
      ? 0
      : calculateDiscountValue(discounts, subtotalWithTaxesApplied);

    const total = calculateTotalValue(subtotalSum, taxesSum, discountSum);

    return {
      subtotal: subtotalSum,
      discounts: discountSum,
      tax: taxesSum,
      total: total,
    };
  }
});
