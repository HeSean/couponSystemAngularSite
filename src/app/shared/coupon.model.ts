export class Coupon {
  public id;
  public title;
  public startDate;
  public endDate;
  public amount;
  public type;
  public message;
  public price;
  public image;


  // full CTOR
  constructor(id: number, title: string, startDate: string, endDate: string, amount: number, type: string, message: string,
              price: number, image: string) {
    this.id = id;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.amount = amount;
    this.type = type;
    this.message = message;
    this.price = price;
    this.image = image;
  }


}
