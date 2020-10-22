import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/Services/Admin/admin-auth.service';

@Component({
  selector: 'app-admin-request-resend',
  templateUrl: './admin-request-resend.component.html',
  styleUrls: ['./admin-request-resend.component.css']
})
export class AdminRequestResendComponent implements OnInit {

  constructor(
    private auth : AdminAuthService,
    private notify : ToastrService
    ) { }

  ngOnInit(): void {
  }
  public form = { email: null};
  onSubmit()
  {
      this.auth.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse (data),
      error => this.handleError(error)
      
    )
  }

  handleResponse(data)
  {
    this.notify.success('Check your inbox' , 'Email Sent');
    console.log(data);
    this.form.email = null;
  }
  handleError(error)
  {
    if(error.status==200){
      this.notify.success('Check your inbox' , 'Email Sent');
    console.log(error);
    }
    else{
      this.notify.error('Error occured . Try again' , 'Error');
      console.log(error);
      
    }
  }

  
}
