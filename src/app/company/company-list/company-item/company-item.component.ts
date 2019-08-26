import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {


  @Input() company: Company;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
