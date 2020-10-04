import { TokenService } from './../../Services/token.service';
import { AuthService } from './../../Services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService , private Token:TokenService ) {}

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
  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data){
    this.Token.handle(data.access_token);

  }
}
