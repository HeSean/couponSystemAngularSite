import { Component, OnInit, OnDestroy } from '@angular/core';
import { Coupon } from 'src/app/shared/coupon.model';
import { Subscription } from 'rxjs';
import { CouponsService } from 'src/app/shared/coupons.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-couponlist',
  templateUrl: './couponlist.component.html',
  styleUrls: ['./couponlist.component.scss']
})
export class CouponlistComponent implements OnInit, OnDestroy {

  coupons: Coupon[];
  subscription: Subscription;

  constructor(private couponsService: CouponsService,
              private storageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.couponsService.couponsChanged.subscribe(
    (coupons: Coupon[]) => {
      this.coupons = coupons;
    });
    this.coupons = this.couponsService.getCoupons();
  }

  onSave() {
    this.couponsService.setCoupons(this.coupons);
    this.storageService.storeCoupons();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
