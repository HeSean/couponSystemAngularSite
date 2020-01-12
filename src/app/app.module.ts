import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EditCouponComponent } from './coupons/edit-coupon/edit-coupon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CouponlistComponent } from './coupons/couponlist/couponlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CouponItemComponent } from './coupons/couponlist/coupon-item/coupon-item.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyItemComponent } from './company/company-list/company-item/company-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { DataStorageService } from './shared/data-storage.service';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerItemComponent } from './customer/customer-list/customer-item/customer-item.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './header/sidenav/sidenav.component';
import { CustomerAvailableCouponlistComponent } from './customer-available-couponlist/customer-couponlist.component';
import { CustomerSortedCouponlistComponent } from './customer-sorted-couponlist/customer-couponlist.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditCouponComponent,
    NotFoundComponent,
    CouponlistComponent,
    CouponItemComponent,
    EditCompanyComponent,
    CompanyListComponent,
    HomePageComponent,
    CompanyItemComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerItemComponent,
    EditCustomerComponent,
    SignupComponent,
    SidenavComponent,
    CustomerAvailableCouponlistComponent,
    CustomerSortedCouponlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbEvaIconsModule,
    // NbMenuModule.forRoot()
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
