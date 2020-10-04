import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthService) {}
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
      (data) => console.log(data),
      (error) => console.log(this.handleError(error))
    );
    
  }
  handleError(error) {
    this.error = error.error.errors;
    return this.error;
  }
}
