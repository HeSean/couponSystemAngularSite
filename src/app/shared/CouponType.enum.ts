import { Coupon } from './coupon.model';

export enum CouponType {
  RESTAURANTS,
  ELECTRICITY,
  FOOD,
  HEALTH,
  SPORTS,
  CAMPING,
  TRAVELLING
}

export const CouponType2LabelMapping = {
  [CouponType.RESTAURANTS]: 'Restaurants',
  [CouponType.ELECTRICITY]: 'Electricity',
  [CouponType.FOOD]: 'Food',
  [CouponType.HEALTH]: 'Health',
  [CouponType.SPORTS]: 'Sports',
  [CouponType.CAMPING]: 'Camping',
  [CouponType.TRAVELLING]: 'Travelling'
};
