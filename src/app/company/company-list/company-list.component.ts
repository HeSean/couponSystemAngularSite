import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { Subscription } from 'rxjs';
import { CompanyService } from 'src/app/shared/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  companies: Company[];
  subscription: Subscription;

  constructor(private companyService: CompanyService,
              private storageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.companyService.companiesChanged.subscribe(
      (companys: Company[]) => {
        this.companies = companys;
      }
    );
    this.companies = this.companyService.getCompanies();
  }


  onSave() {
    this.companyService.setCompanies(this.companies);
    this.storageService.storeCompanies();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
