import { CurrentAdminService } from './../../../Services/Admin/current-admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminTokenService } from './../../../Services/Admin/admin-token.service';
import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/Services/Admin/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private auth : AdminAuthService,
    private token : AdminTokenService,
    private Auth : CurrentAdminService,
    private router : Router,
    private notify : ToastrService
    ) {}

  public form = {
    email: null,
    password: null,
  };
  public error = null;
  ngOnInit(): void {}

  onSubmit() {
    return this.auth.login(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.notify.success('Done' , 'Congts');
    this.token.handle(data.access_token);
    this.Auth.changeAuthStatus(true)
    this.router.navigateByUrl('/');
    console.log(data);
    
  }
  handleError(error) {
    this.notify.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
    this.error = error.error.error;
  }
  }


