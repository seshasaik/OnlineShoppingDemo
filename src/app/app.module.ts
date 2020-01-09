import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalMaterialModule } from './global-material-module/global-material-module.module';
import { AppRouterService } from './services/app-router.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MessagingModule } from './feature/messaging/messaging.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SignUpComponent,
    HomeComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GlobalMaterialModule,
    AppRoutingModule,
    MessagingModule,
  ],
  providers: [AppRouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
