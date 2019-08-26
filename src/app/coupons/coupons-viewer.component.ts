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


  coupons: any = [];
  constructor(private couponsService: CouponsService, private storageService: DataStorageService) { }

  ngOnInit() {
    let observable = this.couponsService.couponsChanged
      .subscribe((res) => {
        console.log(res);
        this.coupons = res;
      });

    this.coupons = this.couponsService.getCoupons();
  }

  onSave() {
    this.storageService.storeCoupons();
  }

  onDelete() {
    this.coupons = [];
  }

  onFetch() {
    this.coupons = this.storageService.fetchCoupons().subscribe(() => {
      (couponz: Coupon[]) => {
        this.coupons = couponz;
      }
    });
  }

}
