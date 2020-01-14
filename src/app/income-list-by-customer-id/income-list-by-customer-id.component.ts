import { Component, OnInit } from '@angular/core';
import { Income } from '../shared/income.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-income-list-by-customer-id',
  templateUrl: './income-list-by-customer-id.component.html',
  styleUrls: ['./income-list-by-customer-id.component.scss']
})
export class IncomeListByCustomerIdComponent implements OnInit {

  incomes: Income[];
  id = 0;
  isEmpty = true;

  constructor(
    private storageService: DataStorageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        if (this.id !== undefined) {
          this.refreshList(this.id);
        }
      }
    );
  }

  refreshList(id) {
    this.storageService.viewAllIncomeByCustomer(id).subscribe(res => {
      this.incomes = res.body;
      if (this.incomes.length > 0) {
        this.isEmpty = false;
      }
    });
  }


}
