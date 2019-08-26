import { Component, OnInit } from '@angular/core';
import { Company } from '../shared/company.model';
import { CompanyService } from '../shared/company.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {


  companies: Company[];
  constructor(private companiesService: CompanyService, private storageService: DataStorageService) { }

  ngOnInit() {
    let observable = this.companiesService.companiesChanged
      .subscribe((res) => {
        console.log(res);
        this.companies = res;
      });
    this.companies = this.companiesService.getCompanies();
  }

  onSave() {
    this.storageService.storeCompanies();
  }

  onDelete() {
    this.companies = [];
  }

}
