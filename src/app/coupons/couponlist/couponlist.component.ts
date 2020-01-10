import { Component, OnInit, OnDestroy } from '@angular/core';
import { Coupon } from 'src/app/shared/coupon.model';
import { Subscription } from 'rxjs';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-couponlist',
  templateUrl: './couponlist.component.html',
  styleUrls: ['./couponlist.component.scss']
})
export class CouponlistComponent implements OnInit {

  coupons: Coupon[];
  token = '';

  constructor(
    private storageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.token = this.storageService.getToken();
    console.log(this.token);
    this.refreshList();
  }

  refreshList() {
    console.log(this.token);

    this.storageService.getAllCoupons(this.token).subscribe(res => {
      console.log(res);
      this.coupons = res.body;
    });
  }

  onSave() {

  }






}
