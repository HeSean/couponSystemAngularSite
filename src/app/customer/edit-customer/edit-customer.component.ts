import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  id: number;
  editMode = false;
  token = '';

  constructor(
    private storageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.token = this.storageService.getToken();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        console.log('Customer editMode - ' + this.editMode);
        this.initForm();
      }
    );
  }

  initForm() {
    this.customerForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      custName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    if (this.editMode) {
      this.storageService.getCustomer(this.token, this.id).subscribe(res => {
        console.log('customer retrieved  @edit-customer- ' + res.body.name);
        this.customerForm.controls.id.setValue(res.body.id);
        this.customerForm.controls.custName.setValue(res.body.name);
        this.customerForm.controls.password.setValue(res.body.password);
      });
    }

  }


  onSubmit() {
    if (this.editMode) {
      this.storageService.updateCustomer(this.token, this.id, this.customerForm.value);
    } else {
      this.storageService.createCustomer(this.token, this.customerForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  logForm() {
    console.log(this.customerForm);
  }
}
