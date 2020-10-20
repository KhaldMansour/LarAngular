import { CurrentUserService } from './../../Services/current-user.service';
import { TokenService } from './../../Services/token.service';
import { AuthService } from './../../Services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private Token: TokenService,
    private router: Router,
    private Auth: CurrentUserService,
    private notify: ToastrService
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
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true)
    this.router.navigateByUrl('/');
  }
  handleError(error) {
    this.notify.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
    this.error = error.error.error;
  }
}
