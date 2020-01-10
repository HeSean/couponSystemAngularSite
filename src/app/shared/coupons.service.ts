import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from './coupon.model';
import { Subject, Subscription } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  couponsChanged = new Subject<Coupon[]>();

  private coupons: Coupon[];



  constructor(private http: HttpClient, private dataStorage: DataStorageService) { }

  setCoupons(coupons: Coupon[]) {
    this.coupons = coupons;
    this.couponsChanged.next(this.coupons.slice());
  }

  getCoupons() {
    console.log('returning array of coupons @ coupons.service.ts - ' + this.coupons);
    return this.coupons.slice();
  }

  getCoupon(id: number) {
    return this.coupons[id];
  }

  addCoupon(couopn: Coupon) {
    this.coupons.push(couopn);
    this.couponsChanged.next(this.coupons.slice());
  }

  updateCoupon(index: number, newCoupon: Coupon) {
    this.coupons[index] = newCoupon;
    this.couponsChanged.next(this.coupons.slice());
  }

  deleteCoupon(index: number) {
    this.coupons.splice(index, 1);
    this.couponsChanged.next(this.coupons.slice());
  }


}
