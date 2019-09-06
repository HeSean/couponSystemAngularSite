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


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private fetchCouponsSpring = 'http://localhost:8080/coupon/getAll';
  private fetchCouponsFirebase = 'https://couponsystem-b1b74.firebaseio.com/coupons.json';

  constructor(private http: HttpClient,
              // private couponsService: CouponsService,
              // private companyService: CompanyService,
              // private customerService: CustomerService
              ) { }

  storeCoupons() {
    const coupons = this.couponsService.getCoupons();
    console.log(coupons);
    this.http.put(
      'https://couponsystem-b1b74.firebaseio.com/coupons.json',
      coupons).subscribe(response => {
        console.log(response);
      });
  }



  // fetchCoupons() {
  //   return this.http
  //     .get<Coupon[]>(this.fetchCouponsSpring)
  //     .pipe(map(coupons => {
  //       console.log('fetchCoupons @data-storage.service.ts - ' + coupons);
  //       return coupons.map(coupon => {
  //         return {
  //           ...coupon, title: coupon.title ? coupon.title : ''
  //         };
  //       });
  //     }));
  // }

  fetchCoupons(): Observable<any> {
    return this.http.get(this.fetchCouponsSpring);
  }



  storeCompanies() {
    const companies = this.companyService.getCompanies();
    console.log(companies.values);
    this.http.put('https://couponsystem-b1b74.firebaseio.com/companies.json',
      companies).subscribe(response => {
        console.log(response);
      });
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
    const customers = this.customerService.getCustomers();
    console.log(customers);
    this.http.put(
      'https://couponsystem-b1b74.firebaseio.com/customers.json',
      customers).subscribe(response => {
        console.log(response);
      });
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
