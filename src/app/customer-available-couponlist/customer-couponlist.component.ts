import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Coupon } from '../shared/coupon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-couponlist',
  templateUrl: './customer-couponlist.component.html',
  styleUrls: ['./customer-couponlist.component.scss']
})
export class CustomerAvailableCouponlistComponent implements OnInit {

  coupons: Coupon[];
  token = '';

  constructor(
    private storageService: DataStorageService, private router: Router) { }

  ngOnInit() {
    this.token = this.storageService.getToken();
    this.refreshList();
  }

  refreshList() {
    this.storageService.getAllAvailableCoupons(this.token).subscribe(res => {
      this.coupons = res.body;
    });
  }

  buyCoupon(couponId: number) {
    this.storageService.buyCoupon(this.token, couponId).subscribe(res => {
      alert('coupon ' + res.name + ' was bought succesfully :)');
      this.router.navigate(['customer/purchased-coupons']);
    });
  }
}
