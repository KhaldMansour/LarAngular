import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/Services/Admin/admin-auth.service';

@Component({
  selector: 'app-admin-response-resend',
  templateUrl: './admin-response-resend.component.html',
  styleUrls: ['./admin-response-resend.component.css']
})
export class AdminResponseResendComponent implements OnInit {

  constructor(
    private router : Router,
    private auth : AdminAuthService,
    private notify : ToastrService,
    private route : ActivatedRoute

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
    this.router.navigateByUrl('/admin/login');
  }
  handleError(error)
  {
    this.notify.success('Invalid Data' , 'Try Again');
  }

}
