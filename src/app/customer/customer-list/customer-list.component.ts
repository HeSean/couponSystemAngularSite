import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/shared/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  customers: Customer[];
  subscription: Subscription;

  constructor(private customerService: CustomerService,
              private storageSerice: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.customerService.customersChanged.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );
    this.customers = this.customerService.getCustomers();
  }

  onSave() {
    this.customerService.setCustomers(this.customers);
    this.storageSerice.storeCustomers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
