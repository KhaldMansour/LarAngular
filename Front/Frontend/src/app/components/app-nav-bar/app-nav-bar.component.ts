import { AdminTokenService } from './../../Services/Admin/admin-token.service';
import { CurrentAdminService } from './../../Services/Admin/current-admin.service';
import { TokenService } from './../../Services/token.service';
import { CurrentUserService } from './../../Services/current-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'appNavBar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css'],
})
export class AppNavBarComponent implements OnInit {
  constructor(private user: CurrentUserService , private router:Router , private Token : TokenService , private admin : CurrentAdminService , private AdminToken : AdminTokenService ) {}
  public loggedin: boolean;
  public adminLoggedin: boolean;

  ngOnInit(): void {
    this.user.authStatus.subscribe((value) => (this.loggedin = value));
    this.admin.authStatus.subscribe((value) => (this.adminLoggedin = value));
  }

  logout(event : MouseEvent)
  {
    event.preventDefault();
    //Logout for User
    if(this.loggedin)
    {
    this.Token.remove();
    this.user.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    }
    //Logout for Admin
    else if(this.adminLoggedin)
    {
      this.AdminToken.remove();
      this.admin.changeAuthStatus(false);
      this.router.navigateByUrl('/admin/login')
    }
  }
}
