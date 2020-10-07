import { SnotifyService } from 'ng-snotify';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-resend',
  templateUrl: './request-resend.component.html',
  styleUrls: ['./request-resend.component.css']
})
export class RequestResendComponent implements OnInit {

  constructor(
    private auth : AuthService,
    private notify: SnotifyService
    ) { }

  public form = { email: null};
  onSubmit()
  {
      this.auth.sendPasswordResetLink(this.form).subscribe(
      data => console.log(data),
      error => this.notify.error(error.error.error)
    )
  }

  handleResponse(res)
  {
    console.log(res);
    this.form.email = null;
  }

  ngOnInit(): void {
  }

}
