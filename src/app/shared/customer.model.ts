import { Coupon } from './coupon.model';

export class Customer {
  coupons: Coupon[];
  id: number;
  custName;
  password;
  // email;

  constructor(coupons, id, name, password) {
    this.coupons = coupons;
    this.id = id;
    this.custName = name;
    this.password = password;
  }
}
