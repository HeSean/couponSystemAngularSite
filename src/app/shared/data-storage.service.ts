import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coupon } from './coupon.model';
import { map } from 'rxjs/operators';
import { Company } from './company.model';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private andString = '&';
  private currentToken = '';
  private currentUser = 'GUEST';
  private clienTypeString = 'clientType=';
  private loginUrl = 'http://localhost:8080/login?';
  private logoutUrl = 'http://localhost:8080/blogout?token=';

  // Admin URL
  private companyIdString = 'companyId=';
  private companyNameString = 'companyName=';
  private createCompanyUrl = 'http://localhost:8080/admin/createCompany?token=';
  private getCompanyUrl = 'http://localhost:8080/admin/getCompany?token=';
  private getAllCompaniesUrl = 'http://localhost:8080/admin/getAllCompanies?token=';
  private updateCompanyUrl = 'http://localhost:8080/admin/updateCompany?token=';
  private deleteCompanyUrl = ' http://localhost:8080/admin/deleteCompany?token=';

  private customerIdString = 'customerId=';
  private customerNameString = 'customerName=';
  private createCustomerUrl = 'http://localhost:8080/admin/addCustomer?token=';
  private getCustomerUrl = 'http://localhost:8080/admin/getCustomer?token=';
  private getAllCustomersUrl = 'http://localhost:8080/admin/getAllCustomers?token=';
  private updateCustomerUrl = 'http://localhost:8080/admin/updateCustomer?token=';
  private deleteCustomerUrl = 'http://localhost:8080/admin/deleteCustomer?token=';

  // Company URL
  private couponIdString = 'couponId=';
  private couponNameString = 'couponName=';
  private couponTypeString = 'type=';
  private createCouponUrl = 'http://localhost:8080/company/createCoupon?token=';
  private getCouponUrl = 'http://localhost:8080/company/getCoupon?token=';
  private getCouponByTypeUrl = 'http://localhost:8080/company/getCouponByType?token=';
  private getAllCouponsUrl = 'http://localhost:8080/company/getAllCoupons?token=';
  private updateCouponUrl = 'http://localhost:8080/company/updateCoupon/?token=';
  private deleteCouponByNameUrl = 'http://localhost:8080/company/deleteCoupon?token=';
  private deleteCouponByIdUrl = 'http://localhost:8080/company/deleteCouponById?token=';

  // Customer URL
  private priceString = 'price=';
  private dateString = 'date=';
  private buyCouponUrl = 'http://localhost:8080/customer/buyCoupon?token=';
  private getAllAvailableCouponsUrl = 'http://localhost:8080/customer/getAllAvailableCoupons?token=';
  private getAllPurchasedCouponsUrl = 'http://localhost:8080/customer/getAllPurchasedCoupons?token=';
  private getCouponByPriceUrl = ' http://localhost:8080/customer/getPurchasedCouponByPrice?token=';
  private getCouponByDateUrl = 'http://localhost:8080/customer/getPurchasedCouponByDate?token=';

  constructor(private http: HttpClient) { }

  login(username, password, type: string): Observable<any> {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    this.currentUser = type.toUpperCase();
    const loginUrl = this.loginUrl +
      'name=' + username + this.andString
      + 'password=' + password + this.andString +
      'clientType=' + this.currentUser;
    return this.http.post(loginUrl, { headers: reqHeader, observe: 'response', responseType: 'json' });
  }

  logout(token: string, type: string) {
    const url = this.logoutUrl + this.currentToken + this.andString + this.clienTypeString + type;
    return this.http.post(url, { observe: 'response', responseType: 'json' });
  }

  // Admin Methods
  createCompany(token: string, company: Company) {
    const url = this.createCompanyUrl + token;
    return this.http.post<Company>(url, company, { observe: 'response', responseType: 'json' });
  }

  getCompany(token: string, companyId: number) {
    const url = this.getCompanyUrl + token + this.andString + this.companyIdString + companyId;
    return this.http.get<Company>(url, { observe: 'response', responseType: 'json' });
  }

  getAllCompanies(token: string) {
    const url = this.getAllCompaniesUrl + token;
    return this.http.get<Company[]>(url, { observe: 'response', responseType: 'json' });
  }

  updateCompany(token: string, companyId: number, company: Company) {
    const url = this.updateCompanyUrl + token + this.andString + this.companyIdString + companyId;
    return this.http.put(url, company, { observe: 'response', responseType: 'json' });
  }

  deleteCompany(token: string, companyName: string) {
    const url = this.deleteCompanyUrl + token + this.andString + this.companyNameString + companyName;
    return this.http.delete(url, { observe: 'response', responseType: 'json' });
  }

  createCustomer(token: string, customer: Customer) {
    const url = this.createCustomerUrl + token;
    return this.http.post<Customer>(url, customer, { observe: 'response', responseType: 'json' });
  }

  getCustomer(token: string, customerId: number) {
    const url = this.getCustomerUrl + token + this.andString + this.customerIdString + customerId;
    return this.http.get<Customer>(url, { observe: 'response', responseType: 'json' });
  }

  getAllCustomers(token: string) {
    const url = this.getAllCustomersUrl + token;
    return this.http.get<Customer[]>(url, { observe: 'response', responseType: 'json' });
  }

  updateCustomer(token: string, customerId: number, customer: Customer) {
    const url = this.updateCustomerUrl + token + this.andString + this.customerIdString + customerId;
    return this.http.put(url, customer, { observe: 'response', responseType: 'json' });
  }

  deleteCustomer(token: string, customerName: Customer) {
    const url = this.deleteCustomerUrl + token + this.andString + this.customerNameString + customerName;
    return this.http.delete(url, { observe: 'response', responseType: 'json' });
  }


  // Company Methods
  createCoupon(token: string, coupon: Coupon) {
    const url = this.createCouponUrl + token;
    return this.http.post<Coupon>(url, coupon, { observe: 'response', responseType: 'json' });
  }

  getCoupon(token: string, couponId: number) {
    const url = this.getCouponUrl + token + this.andString + this.couponIdString + couponId;
    return this.http.get<Coupon>(url, { observe: 'response', responseType: 'json' });
  }

  getCouponByType(token: string, type: string) {
    const url = this.getCouponByTypeUrl + token + this.andString + this.couponTypeString + type.toUpperCase;
    return this.http.get<Coupon[]>(url, { observe: 'response', responseType: 'json' });
  }

  getAllCoupons(token: string) {
    const url = this.getAllCouponsUrl + token;
    return this.http.get<Coupon[]>(url, { observe: 'response', responseType: 'json' });
  }

  updateCoupon(token: string, couponId: number, coupon: Coupon) {
    const url = this.updateCouponUrl + token + this.andString + this.couponIdString + couponId;
    return this.http.put(url, coupon, { observe: 'response', responseType: 'json' });
  }

  deleteCouponByName(token: string, couponName: string) {
    const url = this.deleteCouponByNameUrl + token + this.andString + this.couponNameString + couponName;
    return this.http.delete(url, { observe: 'response', responseType: 'json' });
  }

  deleteCouponById(token: string, couponId: number) {
    const url = this.deleteCouponByIdUrl + token + this.andString + this.couponIdString + couponId;
    return this.http.delete(url, { observe: 'response', responseType: 'json' });
  }


  // Customer Methods
  buyCoupon(token: string, couponId: number) {
    const url =
      this.buyCouponUrl + token + this.andString +
      this.couponIdString + couponId;
    return this.http.post<Coupon>(url, { observe: 'response', responseType: 'json' });
  }

  getAllAvailableCoupons(token: string) {
    const url = this.getAllAvailableCouponsUrl + token;
    return this.http.get<Coupon[]>(url, { observe: 'response', responseType: 'json' });
  }

  getAllPurchasedCoupons(token: string) {
    const url = this.getAllPurchasedCouponsUrl + token;
    return this.http.get<Coupon[]>(url, { observe: 'response', responseType: 'json' });
  }

  getCouponByPrice(token: string, price: number) {
    const url = this.getCouponByPriceUrl + token + this.andString + this.priceString + price;
    return this.http.get<Coupon[]>(url, { observe: 'response', responseType: 'json' });
  }

  getCouponByDate(token: string, date: string) {
    const url = this.getCouponByDateUrl + token + this.andString + this.dateString + date;
    return this.http.get<Coupon[]>(url, { observe: 'response', responseType: 'json' });
  }

  setToken(token: string) {
    this.currentToken = token;
  }

  getToken() {
    return this.currentToken;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser() {
    this.currentUser = 'GUEST';
  }


















  fetchCouponSpringMethod() {
    return this.http
      .get<Coupon[]>(this.getAllCouponsUrl + this.currentToken)
      .pipe(map(coupons => {
        console.log('fetchCoupons zzimz - ' + coupons);
        return coupons.map(coupon => {
          return {
            ...coupon, title: coupon.name ? coupon.name : ''
          };
        });
      }));
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
