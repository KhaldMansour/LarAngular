import { TokenService } from './../../Services/token.service';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private Token: TokenService
    ) 
    {}
    
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    name: null
  };
  public test;
  public error = null;

  ngOnInit(): void {}

  onSubmit() {
    return this.auth.signup(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => console.log(this.handleError(error))
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/');

  }


  handleError(error) {
    this.error = error.error.errors;
    return this.error;
  }
}
