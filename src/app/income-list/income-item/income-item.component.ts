import { Component, OnInit, Input } from '@angular/core';
import { Income } from 'src/app/shared/income.model';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.scss']
})
export class IncomeItemComponent implements OnInit {


  @Input() income: Income;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
