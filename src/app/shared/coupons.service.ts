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

  private coupons: Coupon[] = [
    new Coupon(
      1,
      'Seventh Popcorn Free',
      'startDate',
      'endDate',
      5,
      'FOOD',
      'By YesPlanet',
      15,
      ''),
    new Coupon(
      2,
      'Free Popcorn with movie', 'startDate',
      'endDate', 5,
      'FOOD', 'By YesPlanet', 15, ''
    ),
    new Coupon(3, 'Free Tent with Lederman swiss knife', 'startDate',
      'endDate',
      5,
      'CAMPING', 'By Hagor', 15, '')
  ];


  constructor(private http: HttpClient) { }

  // private coupons: Coupon[] = [];

  setCoupons(coupons: Coupon[]) {
    this.coupons = coupons;
    this.couponsChanged.next(this.coupons.slice());
  }

  getCoupons() {
    console.log('returning array of coupons - ' + this.coupons);
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
