import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  Log = 'Login';
  collapsed = true;

  loggedIn = false;


  title = 'Coupon System';
  createdBy = 'Created By Sean Hed';


  constructor(private storageService: DataStorageService) {
  }

  ngOnInit() {
    if (this.storageService.getToken() !== '') {
      this.loggedIn = true;
    }
  }

  logout() {
    this.storageService.setToken('');
  }



}
