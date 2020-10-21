import { Router } from '@angular/router';
import { AdminTokenService } from './../../../Services/Admin/admin-token.service';
import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/Services/Admin/admin-auth.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  constructor(
    private auth : AdminAuthService,
    private token : AdminTokenService,
    private router : Router
    ) { }

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    name: null
  };
  public error = null;

  ngOnInit(): void {}

  onSubmit() {
    return this.auth.signup(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => console.log(this.handleError(error))
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/');
    console.log(data);
    

  }


  handleError(error) {
    console.log(error);
    this.error = error.error.errors;
    return this.error;
  }

}
