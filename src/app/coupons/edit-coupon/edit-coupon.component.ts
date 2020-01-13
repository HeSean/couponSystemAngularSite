import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CouponType2LabelMapping, CouponType } from 'src/app/shared/CouponType.enum';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Coupon } from 'src/app/shared/coupon.model';


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
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', Validators.required),
      amount: new FormControl(0, Validators.required),
      type: new FormControl(CouponType.FOOD, Validators.required),
      message: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      imagePath: new FormControl('', Validators.required)
    });

    if (this.editMode) {
      this.storageService.getCoupon(this.token, this.id).subscribe(res => {
        this.couponForm.controls.name.setValue(res.body.name);
        this.couponForm.controls.amount.setValue(res.body.amount);
        this.couponForm.controls.price.setValue(res.body.price);
        this.couponForm.controls.message.setValue(res.body.message);
        this.couponForm.controls.imagePath.setValue(res.body.image);
        this.couponForm.controls.startDate.setValue(this.reverse(res.body.startDate));
        this.couponForm.controls.endDate.setValue(this.reverse(res.body.endDate));
      });
    }
  }

  reverse(s) {
    return s.split('-').reverse().join('-');
  }

  toDate(s) {
    return s.split('-').join('/');
  }

  onSubmit() {
    console.log(this.couponForm.value);
    console.log(this.couponForm.controls.startDate.value);
    const coupon = new Coupon(
      this.id,
      this.couponForm.controls.name.value,
      this.couponForm.controls.startDate.value,
      this.couponForm.controls.endDate.value,
      this.couponForm.controls.amount.value,
      this.couponForm.controls.type.value,
      this.couponForm.controls.message.value,
      this.couponForm.controls.price.value,
      this.couponForm.controls.imagePath.value
    );

    if (this.editMode) {
      this.storageService.updateCoupon(this.token, this.id, coupon).subscribe();
    } else {
      this.storageService.createCoupon(this.token, coupon).subscribe();
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDelete() {
    return this.storageService.deleteCouponById(this.token, this.id).subscribe();
  }



}
