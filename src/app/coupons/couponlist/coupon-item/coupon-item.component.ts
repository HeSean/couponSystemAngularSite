import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/shared/coupon.model';

@Component({
  selector: 'app-coupon-item',
  templateUrl: './coupon-item.component.html',
  styleUrls: ['./coupon-item.component.scss']
})
export class CouponItemComponent implements OnInit {

  @Input() coupon: Coupon;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
