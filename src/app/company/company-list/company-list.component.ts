import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
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
    this.storageService.getAllCompanies(this.token).subscribe(res => {
      this.companies = res.body;
    });
  }
}
