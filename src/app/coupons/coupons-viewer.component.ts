import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../shared/coupons.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Coupon } from '../shared/coupon.model';

@Component({
  selector: 'app-coupons-viewer',
  templateUrl: './coupons-viewer.component.html',
  styleUrls: ['./coupons-viewer.component.scss']
})
export class CouponsViewerComponent implements OnInit {


  // coupons: any = [];
  coupons: Array<any>;
  constructor(private couponsService: CouponsService, private storageService: DataStorageService) { }

  ngOnInit() {
    // const observable = this.couponsService.couponsChanged
    //   .subscribe((res) => {
    //     console.log(res);
    //     this.coupons = res;
    //   });

    // this.coupons = this.couponsService.getCoupons();

  }

  onSave() {
    this.storageService.storeCoupons(this.coupons);
  }


  onFetch() {
    this.storageService.fetchCouponSpringMethod().subscribe(data => {
      console.log(data);
      this.coupons = data;
    });
    // this.coupons = this.storageService.fetchCoupons().subscribe(() => {
    //   (couponz: Coupon[]) => {
    //     this.coupons = couponz;
    //   };
    // });
  }

  onDelete() {
    this.coupons = new Array<any>();
  }
}
