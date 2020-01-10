import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CouponsService } from './coupons.service';
import { Coupon } from './coupon.model';
import { CompanyService } from './company.service';
import { map, tap } from 'rxjs/operators';
import { Company } from './company.model';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';
import { UpperCasePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private andString = '&';
  private loginTemplateString = 'http://localhost:8080/login?';
  private fetchCouponsSpring = 'http://localhost:8080/company/getAllCoupons?token=';
  private storeCouponSpring = 'http://localhost:8080/coupon/add';
  private currentToken = '559ccbac-a2bc-4546-b4ac-b02cc98a9771';

  constructor(private http: HttpClient,
    // private couponsService: CouponsService,
    // private companyService: CompanyService,
    // private customerService: CustomerService
  ) { }

  login(username, password, type: String): Observable<any> {
    let cType = type.toLocaleUpperCase();
    console.log(cType);
    const loginUrl = this.loginTemplateString +
      'name=' + username + this.andString
      + 'password=' + password + this.andString +
      'clientType=' + type;
    return this.http.post(loginUrl, { observe: 'response', responseType: 'json' });
  }

  storeCoupons(coupons) {

    coupons.forEach(coupon => {
      console.log(coupon);
      this.http.put(
        this.storeCouponSpring,
        coupon).subscribe(response => {
          console.log(response);
        });

    });
  }



  fetchCouponSpringMethod() {
    return this.http
      .get<Coupon[]>(this.fetchCouponsSpring + this.currentToken)
      .pipe(map(coupons => {
        console.log('fetchCoupons zzimz - ' + coupons);
        return coupons.map(coupon => {
          return {
            ...coupon, title: coupon.title ? coupon.title : ''
          };
        });
      }));
  }

  fetchCoupons(): Observable<any> {
    return this.http.get<Coupon[]>(this.fetchCouponsSpring + this.currentToken);
  }



  storeCompanies() {
    // const companies = this.companyService.getCompanies();
    // console.log(companies.values);
    // this.http.put('https://couponsystem-b1b74.firebaseio.com/companies.json',
    //   companies).subscribe(response => {
    //     console.log(response);
    //   });
  }

  fetchCompanies() {
    return this.http
      .get<Company[]>('https://couponsystem-b1b74.firebaseio.com/companies.json')
      .pipe(map(companies => {
        console.log('fetchCompanies @data-storage.service.ts - ' + companies);
        return companies.map(company => {
          return {
            ...company, coupons: company.coupons ? company.coupons : []
          };
        });
      }));
  }

  storeCustomers() {
    // const customers = this.customerService.getCustomers();
    // console.log(customers);
    // this.http.put(
    //   'https://couponsystem-b1b74.firebaseio.com/customers.json',
    //   customers).subscribe(response => {
    //     console.log(response);
    //   });
  }

  fetchCustomers() {
    return this.http
      .get<Customer[]>('https://couponsystem-b1b74.firebaseio.com/customers.json')
      .pipe(map(customers => {
        console.log('fetchCustomers @data-storage.service.ts - ' + customers);
        return customers.map(customer => {
          return {
            ...customer, coupons: customer.coupons ? customer.coupons : []
          };
        });
      }));
  }









}
