import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    name: null
  };
  public error = null;

  ngOnInit(): void {}

  onSubmit() {
    return this.http.post('http://localhost:8000/api/admin/signup' ,this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => console.log(this.handleError(error))
    );
  }

  handleResponse(data){
    // this.Token.handle(data.access_token);
    // this.router.navigateByUrl('/');
    console.log(data);
    

  }


  handleError(error) {
    console.log(error);
    this.error = error.error.errors;
    return this.error;
  }

}
