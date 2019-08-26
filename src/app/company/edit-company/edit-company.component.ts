import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/shared/company.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  companyForm: FormGroup;
  id: number;
  editMode = false;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        console.log('Companies editMode - ' + this.editMode);
        this.initForm();
      });
  }

  private initForm() {
    let id = 0;
    let compName = '';
    let password = '';
    let email = '';
    let coupons: any[] = [];

    if (this.editMode) {
      const company = this.companyService.getCompany(this.id);
      console.log('company retrived ' + company);
      id = company.id;
      compName = company.compName;
      password = company.password;
      email = company.email;
      coupons = company.coupons;
    }

    this.companyForm = new FormGroup({
      id: new FormControl(id, [Validators.required]),
      compName: new FormControl(compName, [Validators.required]),
      password: new FormControl(password, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.companyService.updateCompany(this.id, this.companyForm.value);
    } else {
      this.companyService.addCompany(this.companyForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  logForm() {
    console.log(this.companyForm);
  }

}
