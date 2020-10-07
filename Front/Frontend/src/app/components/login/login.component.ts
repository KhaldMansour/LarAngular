import { CurrentUserService } from './../../Services/current-user.service';
import { TokenService } from './../../Services/token.service';
import { AuthService } from './../../Services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private Auth: CurrentUserService
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
      (error) => console.log(this.handleError(error))
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true)
    this.router.navigateByUrl('/profile');
  }
  handleError(error) {
    this.error = error.error.error;
  }
}
