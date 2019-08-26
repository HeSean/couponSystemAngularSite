import { Coupon } from './coupon.model';

export class Company {
  coupons: Coupon[];
  id: number;
  compName;
  password;
  email;


  constructor(coupons, id, companyName, password, email) {
    this.coupons = coupons;
    this.id = id;
    this.compName = companyName;
    this.password = password;
    this.email = email;
  }

}
