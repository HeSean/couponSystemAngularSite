import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  loggedIn = false;

  constructor(private storageService: DataStorageService) { }

  ngOnInit() {
    if (this.storageService.getToken() !== '') {
      this.loggedIn = true;
    }
  }

}
