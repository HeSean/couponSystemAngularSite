import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponsViewerComponent } from './coupons/coupons-viewer.component';
import { EditCouponComponent } from './coupons/edit-coupon/edit-coupon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CouponlistComponent } from './coupons/couponlist/couponlist.component';
import { CouponItemComponent } from './coupons/couponlist/coupon-item/coupon-item.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },

  { path: 'coupons', component: CouponlistComponent },
  { path: 'coupons/viewer', component: CouponsViewerComponent },
  { path: 'coupons/new', component: EditCouponComponent },
  { path: 'coupons/:id', component: EditCouponComponent },

  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/viewer', component: CompanyComponent },
  { path: 'companies/new', component: EditCompanyComponent },
  { path: 'companies/:id', component: EditCompanyComponent },

  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/viewer', component: CustomerComponent },
  { path: 'customers/new', component: EditCustomerComponent },
  { path: 'customers/:id', component: EditCustomerComponent },

  { path: 'signup', component: SignupComponent },


  { path: 'not-found', component: NotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
