import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterContentChecked {



  currentUser = 'GUEST';

  constructor(private storageService: DataStorageService) { }

  ngOnInit() { }

  ngAfterContentChecked(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    if (this.storageService.getToken() !== '') {
      this.currentUser = this.storageService.getCurrentUser();
    }
  }


}
