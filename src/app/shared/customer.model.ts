import { Coupon } from './coupon.model';

export class Customer {
  coupons: Coupon[];
  id: number;
  name;
  password;
  // email;

  constructor( id, name, password) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}
