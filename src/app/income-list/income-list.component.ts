import { Component, OnInit } from '@angular/core';
import { Income } from '../shared/income.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {

  incomes: Income[];
  token = '';

  constructor(
    private storageService: DataStorageService,
  ) { }

  ngOnInit() {
    this.token = this.storageService.getToken();
    this.refreshList();
  }

  refreshList() {
    this.storageService.viewAllIncome().subscribe(res => {
      this.incomes = res.body;
    });
  }

}
