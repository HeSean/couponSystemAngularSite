import { Component, OnInit, Input } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Coupon } from '../shared/coupon.model';
import { MatDatepickerInputEvent } from '@angular/material';
import { formatDate } from '@angular/common';


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
  dateBox = false;



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

  getCouponsByDate(event: MatDatepickerInputEvent<Date>) {
    const tempDate = event.value.toString();
    const day = tempDate.slice(8, 10);
    const month = event.value.getMonth() + 1;
    const year = event.value.getUTCFullYear();
    const dateString = year + '-' + month + '-' + day;
    console.log('formatted date - ' + dateString);


    this.storageService.getCouponByDate(this.token, dateString).subscribe(res => {
      this.dateBox = !this.dateBox;
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
