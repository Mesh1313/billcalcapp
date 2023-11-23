
// Note: import explicitly to use the types shiped with jest.
import { describe, it, expect } from '@jest/globals';

import { calculateDiscountValue, calculateSubtotal, calculateTaxValue, calculateTotalValue } from '@app/services/orderCalculator';
import { Discount, DiscountId, DiscountType, MenuItem, MenuItemCategory, Tax } from '@app/types';

const orderItems: MenuItem[] = [
  {
    id: '1',
    name: 'Steak',
    price: '10.99',
    category: MenuItemCategory.Mains
  },
  {
    id: '2',
    name: 'Sandwich',
    price: '3.99',
    category: MenuItemCategory.Appetizers
  },
  {
    id: '3',
    name: 'Beer',
    price: '6.99',
    category: MenuItemCategory.Alcohol
  },
];

const taxes: Tax[] = [
  {
    value: 0.05,
    applicableCategory: [],
  },
  {
    value: 0.08,
    applicableCategory: [],
  },
  {
    value: 0.1,
    applicableCategory: [MenuItemCategory.Alcohol],
  },
];

const discounts: Discount[] = [
  {
    id: DiscountId.FIVE_OFF,
    name: '$3 Off',
    type: DiscountType.FIXED,
    value: 3
  },
  {
    id: DiscountId.TEN_PERCENT,
    name: '10% Off',
    type: DiscountType.PERCENT,
    value: 0.1
  },
];

const EXPECTED_SUBTOTAL = 21.97;

const EXPECTED_TAX_VALUE = 3.5551;

const EXPECTED_DISCOUNT_VALUE = 5.55251;

const EXPECTED_TOTAL_VALUE = 19.972589999999997;

describe('Bill Calculation', () => {
  it('calculates subtotal', () => {
    expect(calculateSubtotal(orderItems)).toEqual(EXPECTED_SUBTOTAL);
  });

  it('calculate tax value', () => {
    expect(calculateTaxValue(orderItems, taxes)).toEqual(EXPECTED_TAX_VALUE);
  });

  it('calculate discount value', () => {
    const subtotalWithTaxes = EXPECTED_SUBTOTAL + EXPECTED_TAX_VALUE;
    expect(calculateDiscountValue(discounts, subtotalWithTaxes)).toEqual(EXPECTED_DISCOUNT_VALUE);
  });

  it('calculate total value', () => {
    expect(calculateTotalValue(EXPECTED_SUBTOTAL, EXPECTED_TAX_VALUE, EXPECTED_DISCOUNT_VALUE)).toEqual(EXPECTED_TOTAL_VALUE);
  });

  it('total should return zero if discount exceeds subtotal value', () => {
    expect(calculateTotalValue(10, 0, 10.1)).toEqual(0);
  });
});
