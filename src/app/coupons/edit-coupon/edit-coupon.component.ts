import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CouponsService } from '../../shared/coupons.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CouponType2LabelMapping, CouponType } from 'src/app/shared/CouponType.enum';


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

  couponTypes = Object.values(this.couponTypeLabel);


constructor(private couponsService: CouponsService, private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
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
  let title = '';
  let startDate = '';
  let endDate = '';
  let amount = 0;
  let type = CouponType.FOOD;
  let message = '';
  let price = 0;
  let image = '';

  if (this.editMode) {
    const coupon = this.couponsService.getCoupon(this.id);
    console.log('coupon retrieved - ' + coupon);
    title = coupon.title;
    startDate = coupon.startDate;
    endDate = coupon.endDate;
    amount = coupon.amount;
    type = coupon.type;
    message = coupon.message;
    price = coupon.price;
    image = coupon.image;
  }

  this.couponForm = new FormGroup({
    title: new FormControl(title, [Validators.required]),
    startDate: new FormControl(startDate, [Validators.required]),
    endDate: new FormControl(endDate, Validators.required),
    amount: new FormControl(amount, Validators.required),
    type: new FormControl(type, Validators.required),
    message: new FormControl(message, Validators.required),
    price: new FormControl(price, Validators.required),
    imagePath: new FormControl(image, Validators.required)
  });
}


onSubmit() {
  if (this.editMode) {
    this.couponsService.updateCoupon(this.id, this.couponForm.value);
  } else {
    this.couponsService.addCoupon(this.couponForm.value);
  }
  this.onCancel();
}

onCancel() {
  this.router.navigate(['../'], { relativeTo: this.route });
}

logForm() {
  console.log(this.couponForm);
}


}
