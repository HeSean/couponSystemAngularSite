import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponsViewerComponent } from './coupons/coupons-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EditCouponComponent } from './coupons/edit-coupon/edit-coupon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CouponsService } from './shared/coupons.service';
import { CouponlistComponent } from './coupons/couponlist/couponlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CouponItemComponent } from './coupons/couponlist/coupon-item/coupon-item.component';
import { CompanyComponent } from './company/company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyItemComponent } from './company/company-list/company-item/company-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CompanyService } from './shared/company.service';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { DataStorageService } from './shared/data-storage.service';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    CouponsViewerComponent,
    HeaderComponent,
    EditCouponComponent,
    NotFoundComponent,
    CouponlistComponent,
    CouponItemComponent,
    CompanyComponent,
    EditCompanyComponent,
    CompanyListComponent,
    HomePageComponent,
    CompanyItemComponent,
    LoginComponent,

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
    MatIconModule
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbEvaIconsModule,
    // NbMenuModule.forRoot()
  ],
  providers: [CouponsService, CompanyService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
