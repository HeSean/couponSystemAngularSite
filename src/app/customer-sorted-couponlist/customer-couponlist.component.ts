import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Coupon } from '../shared/coupon.model';

@Component({
  selector: 'app-customer-couponlist',
  templateUrl: './customer-couponlist.component.html',
  styleUrls: ['./customer-couponlist.component.scss']
})
export class CustomerSortedCouponlistComponent implements OnInit {

  coupons: Coupon[];
  token = '';
  priceValue = 0;
  priceBox = false;



  constructor(
    private storageService: DataStorageService) { }

  ngOnInit() {
    this.token = this.storageService.getToken();
    this.refreshList();
  }

  refreshList() {
    this.storageService.getAllPurchasedCoupons(this.token).subscribe(res => {
      this.coupons = res.body;
    });
  }

  getCouponsByDate() {
    const date = Date.now.toString();
    this.storageService.getCouponByDate(this.token, date).subscribe(res => {
      console.log(res.body);
      this.coupons = res.body;
    });
  }

  getCouponsByPrice(price) {
    this.storageService.getCouponByPrice(this.token, price).subscribe(res => {
      this.priceBox = !this.priceBox;
      console.log(res.body);
      this.coupons = res.body;
    });
  }
}
