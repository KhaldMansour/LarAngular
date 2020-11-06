import { AdminAfterLoginService } from './Services/Admin/admin-after-login.service';
import { AdminRequestResendComponent } from './components/password/Admin/admin-request-resend/admin-request-resend.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/Admin/admin-signup/admin-signup.component';
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
import { AdminBeforeLoginService } from './Services/Admin/admin-before-login.service';
import { AdminResponseResendComponent } from './components/password/Admin/admin-response-resend/admin-response-resend.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[BeforeLoginService , AdminBeforeLoginService ]
  },

  {
    path:'signup',
    component:SignupComponent,
    canActivate:[BeforeLoginService, AdminBeforeLoginService]
  },

  {
    path:'request-password',
    component:RequestResendComponent,
    canActivate:[BeforeLoginService, AdminBeforeLoginService]

  },

  {
    path:'response-password',
    component:ResponseResendComponent,
    canActivate:[BeforeLoginService, AdminBeforeLoginService]

  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AfterLoginService , AdminAfterLoginService]
  },
  // Admin Routes
  {
    path:'admin/signup',
    component:AdminSignupComponent,
    canActivate:[AdminBeforeLoginService, AdminBeforeLoginService]
  },
  {
    path:'admin/login',
    component:AdminLoginComponent,
    canActivate:[AdminBeforeLoginService, AdminBeforeLoginService]
  },
  {
    path:'admin/request-password',
    component:AdminRequestResendComponent,
    canActivate:[AdminBeforeLoginService, AdminBeforeLoginService]
  },
  {
    path:'admin/response-password',
    component:AdminResponseResendComponent,
    canActivate:[AdminBeforeLoginService, AdminBeforeLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
