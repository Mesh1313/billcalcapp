import { Discount, DiscountType, MenuItem, MenuItemCategory, Tax } from '@app/types';

export const calculateSubtotal = (orderItems: MenuItem[]) => {
  return orderItems.reduce((res, item) => {
    const numb = res + Number(item.price);
    return numb;
  }, 0);
};

export const calculateDiscountValue = (selectedDiscounts: Discount[], subtotal: number) => {
  const discountSum = selectedDiscounts.reduce((res, discount) => {
    // Put fixed value discounts first
    if (discount.type === DiscountType.FIXED) {
      return [
        discount,
        ...res,
      ];
    }

    return [
      ...res,
      discount
    ];
  }, [] as Discount[])
  .reduce((sum, discount) => {
    if (discount.type === DiscountType.FIXED) {
      return sum + discount.value;
    }

    if (discount.type === DiscountType.PERCENT) {
      return sum + (subtotal * discount.value);
    }

    return sum;
  }, 0);

  return discountSum;
};

export const calculateTaxValue = (orderItems: MenuItem[], taxes: Tax[]) => {
  const applyTaxesToPrice = (price: number, taxes: Tax[]): number => {
    return taxes.reduce((res, tax) => {
      const taxValue = price * tax.value;

      return res + taxValue;
    }, 0);
  };

  const [alcoholTaxes, restTaxes] = taxes.reduce(
    (res, tax) => {
      if (tax.applicableCategory.includes(MenuItemCategory.Alcohol)) {
        return [
          [
            ...res[0],
            tax
          ],
          res[1]
        ];
      } else {
        return [
          res[0],
          [
            ...res[1],
            tax
          ]
        ];
      }
    },
    [[], []] as [Tax[], Tax[]]
  );

  const taxSum = orderItems.reduce((res, orderItem) => {
    const itemCategory = orderItem.category;
    const itemPrice = Number(orderItem.price);
    let sum = res;

    if (alcoholTaxes.length && itemCategory === MenuItemCategory.Alcohol) {
      sum = sum + applyTaxesToPrice(itemPrice, alcoholTaxes);
    }

    return sum + applyTaxesToPrice(itemPrice, restTaxes);
  }, 0);

  return taxSum;
};

export const calculateTotalValue = (subtotalSum: number, taxesSum: number, discountSum: number): number => {
  const totalSum = subtotalSum + taxesSum - discountSum;

  return totalSum < 0 ? 0 : totalSum;
};

export const numberToCurrency = (num: number) => {
  // Round value to 2 digits
  const numb = Math.round((num + Number.EPSILON) * 100) / 100;

  return numb.toFixed(2);
};
