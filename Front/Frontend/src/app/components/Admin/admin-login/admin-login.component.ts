import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private http: HttpClient) {}

  public form = {
    email: null,
    password: null,
  };
  public error = null;
  ngOnInit(): void {}

  onSubmit() {
    return this.http.post('http://localhost:8000/api/admin/login',this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data) {
    // this.notify.success('Done' , 'Congts');
    // this.Token.handle(data.access_token);
    // this.Auth.changeAuthStatus(true)
    // this.router.navigateByUrl('/');
    console.log(data);
    
  }
  handleError(error) {
    // this.notify.error('everything is broken', 'Major Error', {
    //   timeOut: 3000,
    console.log(error);
    
    this.error = error.error.error;
    };
  }


