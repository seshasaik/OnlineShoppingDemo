import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './component/login/auth.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AuthService } from './auth-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalMaterialModuleModule } from 'src/app/global-material-module/global-material-module.module';

@NgModule({
  imports: [
    CommonModule,   
    AuthRoutingModule,
    ReactiveFormsModule,
    GlobalMaterialModuleModule
  ],
  declarations: [AuthComponent, ForgetPasswordComponent, SignUpComponent],
  providers: [AuthService]
})
export class AuthModule { }
