import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {



  Log = 'Login';
  collapsed = true;
  loggedIn = false;


  title = 'Coupon System';
  createdBy = 'Created By Sean Hed';


  constructor(
    private storageService: DataStorageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this.storageService.getToken() !== '') {
      this.loggedIn = true;
    }
  }

  logout() {
    this.storageService.logout(this.storageService.getToken(), this.storageService.getCurrentUser()).subscribe(res => {
      this.storageService.setToken('');
      this.storageService.setCurrentUser();
      this.loggedIn = false;
      this.router.navigate(['../home']);
    });
  }
}
