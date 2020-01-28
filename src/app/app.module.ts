import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalMaterialModule } from './global-material-module/global-material-module.module';
import { AppRouterService } from './_services/app-router.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MessagingModule } from './feature/messaging/messaging.module';
import { LoadingSpinnerComponent } from './global/loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from './global/loading-spinner/loading-spinner.service';
import { LoaderIntercepter } from './_interceptors/loader-interceptor';
import { JwtTokenInterceptor } from './_interceptors/jwt-token-interceptor';
import { ErrorInterceptor } from './_interceptors/error-interceptor';
import { HomeModule } from './home/home.module';
import { OnlyTwoDecimalInputDirective } from './_directives/only-two-decimal-input.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SignUpComponent,
    LoadingSpinnerComponent,
    OnlyTwoDecimalInputDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GlobalMaterialModule,
    HomeModule,
    AppRoutingModule,
    MessagingModule,

  ],
  providers: [AppRouterService,
    LoadingSpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderIntercepter, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
