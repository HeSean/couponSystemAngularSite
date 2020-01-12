import { CouponType } from './CouponType.enum';

export class Coupon {
  public id;
  public name;
  public startDate;
  public endDate;
  public amount;
  // public type: CouponType;
  public type;
  public message;
  public price;
  public image;


  // full CTOR
  constructor(id: number, name: string, startDate: string, endDate: string, amount: number,
    // type: CouponType,
              type: string,
              message: string,
              price: number, image: string) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.amount = amount;
    this.type = type;
    this.message = message;
    this.price = price;
    this.image = image;
  }


}
