import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response-resend',
  templateUrl: './response-resend.component.html',
  styleUrls: ['./response-resend.component.css']
})
export class ResponseResendComponent implements OnInit {

  constructor( 
    private route : ActivatedRoute,
    private auth : AuthService,
    private router : Router,
    private notify : ToastrService
    )
  { 
     this.route.queryParams.subscribe(
      params =>{ this.form.resetToken = params['token']}
    );
  }

  ngOnInit(): void {
  }

  public error = [];
  public form =
  {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  };

  onSubmit()
  {
    this.auth.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )

  };
  handleResponse(data)
  {
    this.notify.success('Password Changed' , 'Success');
    this.router.navigateByUrl('/login');
  }
  handleError(error)
  {
    this.notify.success('Invalid Data' , 'Try Again');
  }
}
