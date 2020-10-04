import { TokenService } from './Services/token.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResendComponent } from './components/password/request-resend/request-resend.component';
import { ResponseResendComponent } from './components/password/response-resend/response-resend.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http' 
import { AuthService } from './Services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    LoginComponent,
    SignupComponent,
    RequestResendComponent,
    ResponseResendComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService , TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
