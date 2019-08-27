import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../shared/customer.model';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from './data-storage.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersChanged = new Subject<Customer[]>();

  private customers: Customer[]
    = [
      new Customer([], 0, 'Sean', 1234),
      new Customer([], 1, 'Michael', 1234),
      new Customer([], 2, 'Tomer', 1234),
    ];

  constructor(private http: HttpClient,
  ) { }

  setCustomers(customers: Customer[]) {
    this.customers = customers;
    this.customersChanged.next(this.customers.slice());
  }

  getCustomers() {
    console.log('returning array of customers @customer.service.ts - ' + this.customers);
    return this.customers.slice();
  }

  getCustomer(id: number) {
    return this.customers[id];
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
    this.customersChanged.next(this.customers.slice());
  }

  updateCustomer(index: number, newCustomer: Customer) {
    this.customers[index] = newCustomer;
    this.customersChanged.next(this.customers.slice());
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
    this.customersChanged.next(this.customers.slice());
  }
}
