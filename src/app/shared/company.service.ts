import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companiesChanged = new Subject<Company[]>();

  private companies: Company[];
  constructor(private http: HttpClient) { }

  setCompanies(companies: Company[]) {
    this.companies = companies;
    this.companiesChanged.next(this.companies.slice());
  }

  getCompanies() {
    console.log('returning array of companies - ' + this.companies);
    return this.companies.slice();
  }

  getCompany(id: number) {
    return this.companies[id];
  }

  addCompany(company: Company) {
    this.companies.push(company);
    this.companiesChanged.next(this.companies.slice());
  }

  updateCompany(index: number, newCompany: Company) {
    this.companies[index] = newCompany;
    this.companiesChanged.next(this.companies.slice());
  }

  deleteCompany(index: number) {
    this.companies.splice(index, 1);
    this.companiesChanged.next(this.companies.slice());
  }
}
