import { HomeComponent } from './components/home/home.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ResponseResendComponent } from './components/password/response-resend/response-resend.component';
import { RequestResendComponent } from './components/password/request-resend/request-resend.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[BeforeLoginService]
  },

  {
    path:'signup',
    component:SignupComponent,
    canActivate:[BeforeLoginService]
  },

  {
    path:'request-password',
    component:RequestResendComponent,
    canActivate:[BeforeLoginService]

  },

  {
    path:'response-password',
    component:ResponseResendComponent,
    canActivate:[BeforeLoginService]

  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AfterLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
