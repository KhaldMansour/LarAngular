<<<<<<< HEAD
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
=======
import { SnotifyService } from 'ng-snotify';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
>>>>>>> e3595c2a660e996fa94efbbe3718dfaf79a3964c

@Component({
  selector: 'app-request-resend',
  templateUrl: './request-resend.component.html',
  styleUrls: ['./request-resend.component.css']
})
export class RequestResendComponent implements OnInit {

  constructor(
    private auth : AuthService,
    private notify: ToastrService
    ) { }

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
    }
  }

  ngOnInit(): void {
  }

}
