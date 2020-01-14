import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CouponType2LabelMapping, CouponType } from 'src/app/shared/CouponType.enum';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Coupon } from 'src/app/shared/coupon.model';
import { MatDatepickerInputEvent } from '@angular/material';


@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.scss']
})
export class EditCouponComponent implements OnInit {

  couponForm: FormGroup;
  id: number;
  editMode = false;
  couponTypeLabel = CouponType2LabelMapping;
  token = '';
  startDate;
  endDate;


  couponTypes = Object.values(this.couponTypeLabel);


  constructor(private storageService: DataStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.token = this.storageService.getToken();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        console.log('Coupons editMode - ' + this.editMode);
        this.initForm();
      }
    );
  }

  private initForm() {
    this.couponForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', Validators.required),
      amount: new FormControl(0, Validators.required),
      type: new FormControl(this.couponTypes[0], Validators.required),
      message: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      imagePath: new FormControl('', Validators.required)
    });

    if (this.editMode) {
      this.storageService.getCoupon(this.token, this.id).subscribe(res => {
        console.log(res.body);
        this.couponForm.controls.name.setValue(res.body.name);
        this.couponForm.controls.amount.setValue(res.body.amount);
        this.couponForm.controls.price.setValue(res.body.price);
        this.couponForm.controls.message.setValue(res.body.message);
        this.couponForm.controls.imagePath.setValue(res.body.image);
        this.couponForm.controls.start.setValue(this.reverse(res.body.startDate));
        this.couponForm.controls.end.setValue(this.reverse(res.body.endDate));
        this.couponForm.controls.type.setValue(res.body.type);
      });
    }
  }

  reverse(str) {
    return str.split('-').reverse().join('-');
  }


  setStartDate(event: MatDatepickerInputEvent<Date>) {
    let dateString = '';
    const tempDate = event.value.toString();
    const day = tempDate.slice(8, 10);
    const month = event.value.getMonth() + 1;
    const year = event.value.getUTCFullYear();
    if (month < 10) {
      dateString = year + '-0' + month + '-' + day;
    } else {
      dateString = year + '-' + month + '-' + day;
    }
    this.startDate = dateString;

  }

  setEndDate(event: MatDatepickerInputEvent<Date>) {
    let dateString = '';
    const tempDate = event.value.toString();
    const day = tempDate.slice(8, 10);
    const tempDay1 = event.value.getUTCDay();
    const tempDay2 = event.value.getDay();
    const month = event.value.getMonth() + 1;
    const year = event.value.getUTCFullYear();
    if (month < 10) {
      dateString = year + '-0' + month + '-' + day;
    } else {
      dateString = year + '-' + month + '-' + day;
    }
    this.endDate = dateString;
  }

  onSubmit() {
    console.log('startDate - ' + this.startDate + ', endDate - ' + this.endDate);

    const coupon = new Coupon(
      this.id,
      this.couponForm.controls.name.value,
      this.startDate,
      this.endDate,
      this.couponForm.controls.amount.value,
      this.couponForm.controls.type.value,
      this.couponForm.controls.message.value,
      this.couponForm.controls.price.value,
      this.couponForm.controls.imagePath.value
    );
    console.log(coupon);
    console.log('Coupons startDate - ' + coupon.startDate + ', endDate - ' + coupon.endDate);

    if (this.editMode) {
      coupon.startDate = this.couponForm.controls.start.value;
      coupon.endDate = this.couponForm.controls.end.value;
      this.storageService.updateCoupon(this.token, this.id, coupon).subscribe(res => {
        console.log(res.body);
      });
    } else {
      this.storageService.createCoupon(this.token, coupon).subscribe(res => {
        console.log(res.body);
      });
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDelete(name) {
    if (confirm('Are you sure you want to delete ' + name + ' ?')) {
      return this.storageService.deleteCouponById(this.token, this.id).subscribe();
    }
  }


}
