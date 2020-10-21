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
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http' 
import { AuthService } from './Services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/Admin/admin-signup/admin-signup.component';





@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    LoginComponent,
    SignupComponent,
    RequestResendComponent,
    ResponseResendComponent,
    ProfileComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthService , TokenService , { 
    provide: HTTP_INTERCEPTORS ,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
