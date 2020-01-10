import { Coupon } from './coupon.model';

export class Company {
  coupons: Coupon[];
  id: number;
  name;
  password;
  email;


  constructor(id, companyName, password, email) {
    this.id = id;
    this.name = companyName;
    this.password = password;
    this.email = email;
  }

}
