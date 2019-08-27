import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Customer } from '../shared/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService, private storageService: DataStorageService) { }

  ngOnInit() {
    const observable = this.customerService.customersChanged
      .subscribe((res) => {
        console.log('ngOnInit observable subscription @customer.component.ts - ' + res);
        this.customers = res;
      });
    this.customers = this.customerService.getCustomers();
  }

  onSave() {
    this.storageService.storeCustomers();
  }

  onDelete() {
    this.customers = [];
  }

  onFetch() {
    this.storageService.fetchCustomers().subscribe((customers => {
      console.log('customers fetched by service now @customers.component.ts -> ' + customers);
      this.customers = customers;
    }));
  }
}
