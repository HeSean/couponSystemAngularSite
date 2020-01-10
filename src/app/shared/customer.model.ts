import { Coupon } from './coupon.model';

export class Customer {
  coupons: Coupon[];
  id: number;
  name;
  password;
  // email;

  constructor(coupons, id, name, password) {
    this.coupons = coupons;
    this.id = id;
    this.name = name;
    this.password = password;
  }
}
