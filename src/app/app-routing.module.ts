import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCouponComponent } from './coupons/edit-coupon/edit-coupon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CouponlistComponent } from './coupons/couponlist/couponlist.component';
import { CouponItemComponent } from './coupons/couponlist/coupon-item/coupon-item.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerAvailableCouponlistComponent } from './customer-available-couponlist/customer-couponlist.component';
import { CustomerSortedCouponlistComponent } from './customer-sorted-couponlist/customer-couponlist.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeListByCustomerIdComponent } from './income-list-by-customer-id/income-list-by-customer-id.component';
import { IncomeListByCompanyIdComponent } from './income-list-by-company-id/income-list-by-company-id.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/new', component: EditCompanyComponent },
  { path: 'companies/:id', component: EditCompanyComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/new', component: EditCustomerComponent },
  { path: 'customers/:id', component: EditCustomerComponent },

  { path: 'coupons', component: CouponlistComponent },
  { path: 'coupons/new', component: EditCouponComponent },
  { path: 'coupons/:id', component: EditCouponComponent },

  { path: 'customer/available-coupons', component: CustomerAvailableCouponlistComponent },
  { path: 'customer/purchased-coupons', component: CustomerSortedCouponlistComponent },
  { path: 'admin/income', component: IncomeListComponent },
  { path: 'customer/income/:id', component: IncomeListByCustomerIdComponent },
  { path: 'company/income/:id', component: IncomeListByCompanyIdComponent },

  { path: 'not-found', component: NotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
