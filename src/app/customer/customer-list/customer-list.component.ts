import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  token = '';
  constructor(
    private storageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit() {
    this.token = this.storageService.getToken();
    this.refreshList();
  }

  refreshList() {
    this.storageService.getAllCustomers(this.token).subscribe(res => {
      this.customers = res.body;
    });
  }

  onSave() {

  }


}
