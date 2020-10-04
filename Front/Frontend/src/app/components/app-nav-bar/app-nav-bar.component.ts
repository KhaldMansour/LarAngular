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
  constructor(private user: CurrentUserService , private router:Router , private Token : TokenService ) {}
  public loggedin: boolean;

  ngOnInit(): void {
    this.user.authStatus.subscribe((value) => (this.loggedin = value));
  }
  logout(event : MouseEvent)
  {
    event.preventDefault();
    this.Token.remove();
    this.user.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
