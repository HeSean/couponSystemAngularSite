import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DataStorageService } from '../shared/data-storage.service';
import { SidenavComponent } from '../header/sidenav/sidenav.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  type = 'Admin';
  contactMethods = [
    { id: 0, label: 'ADMINISTRATOR' },
    { id: 1, label: 'COMPANY' },
    { id: 2, label: 'CUSTOMER' }
  ];

  contact = {
    label: 'Admin',
    comment: 'No comment',
    subscribe: true,
    contactMethod: 1 // site will send and get this id from backend
  };
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: DataStorageService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.storageService.login(
      this.loginForm.value.username,
      this.loginForm.value.password,
      this.contactMethods[this.type].label)
      .subscribe(res => {
        console.log(res);
        this.storageService.setToken(res);
        this.router.navigate(['../home']);
      });
  }
}
