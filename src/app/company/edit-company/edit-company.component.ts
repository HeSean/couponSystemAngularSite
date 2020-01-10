import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { stringify } from 'querystring';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  companyForm: FormGroup;
  id: number;
  editMode = false;
  token = '';

  constructor(private storageService: DataStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.token = this.storageService.getToken();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        console.log('Companies editMode - ' + this.editMode);
        this.initForm();
      });
  }

  private initForm() {
    this.companyForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      compName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    if (this.editMode) {
      this.storageService.getCompany(this.token, this.id).subscribe(res => {
        this.companyForm.controls.compName.setValue(res.body.name);
        this.companyForm.controls.id.setValue(res.body.id);
        this.companyForm.controls.password.setValue(res.body.password);
        this.companyForm.controls.email.setValue(res.body.email);
      });
    }
  }

  onSubmit() {
    const company = new Company(
      this.id,
      this.companyForm.controls.compName.value,
      this.companyForm.controls.password.value,
      this.companyForm.controls.email.value);

    if (this.editMode) {
      this.storageService.updateCompany(this.token, this.id, this.companyForm.value);
    } else {
      this.storageService.createCompany(this.token, this.companyForm.value);
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
