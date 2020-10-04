import { ProfileComponent } from './components/profile/profile.component';
import { ResponseResendComponent } from './components/password/response-resend/response-resend.component';
import { RequestResendComponent } from './components/password/request-resend/request-resend.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },

  {
    path:'request-password',
    component:RequestResendComponent
  },

  {
    path:'response-password',
    component:ResponseResendComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
