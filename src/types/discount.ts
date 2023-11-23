
export enum DiscountId {
  FIVE_OFF = 1,
  TEN_PERCENT = 2,
  TWENTY_PERCENT = 3,
};

export enum DiscountType {
  FIXED = 1,
  PERCENT = 2,
};

export type Discount = {
  id: DiscountId;
  name: string;
  type: DiscountType;
  value: number;
};
