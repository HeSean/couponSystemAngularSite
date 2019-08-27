import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  id: number;
  editMode = false;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
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
    let id = 0;
    let custName = '';
    let password = '';
    let coupons: any[] = [];

    if (this.editMode) {
      const customer = this.customerService.getCustomer(this.id);
      console.log('customer retrieved  @edit-customer- ' + customer.custName);
      id = customer.id;
      custName = customer.custName;
      password = customer.password;
      coupons = customer.coupons;
    }
    this.customerForm = new FormGroup({
      id: new FormControl(id, [Validators.required]),
      custName: new FormControl(custName, [Validators.required]),
      password: new FormControl(password, [Validators.required]),
      // coupons: new FormControl(coupons, Validators.required)
    });
  }


  onSubmit() {
    if (this.editMode) {
      this.customerService.updateCustomer(this.id, this.customerForm.value);
    } else {
      this.customerService.addCustomer(this.customerForm.value);
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
