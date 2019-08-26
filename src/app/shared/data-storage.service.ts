import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CouponsService } from './coupons.service';
import { Coupon } from './coupon.model';
import { CompanyService } from './company.service';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private couponsService: CouponsService, private companyService: CompanyService) { }

  storeCoupons() {
    const coupons = this.couponsService.getCoupons();
    console.log(coupons);
    this.http.put(
      'https://couponsystem-b1b74.firebaseio.com/coupons.json',
      coupons).subscribe(response => {
        console.log(response);
      });
  }

  storeCompanies() {
    const companies = this.companyService.getCompanies();
    console.log(companies.values);
    this.http.put('https://couponsystem-b1b74.firebaseio.com/companies.json',
      companies).subscribe(response => {
        console.log(response);
      });
  }

  fetchCoupons() {
    return this.http
      .get<Coupon[]>('https://couponsystem-b1b74.firebaseio.com/coupons.json')
      .pipe(map(coupons => {
        return coupons.map(coupon => {
          return {
            ...coupon, title: coupon.title ? coupon.title : ''
          };
        });
      }));
  }








}
