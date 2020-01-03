import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthComponent } from './component/login/auth.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AuthService } from './auth-service.service';
import { GlobalMaterialModuleModule } from 'src/app/global-material-module/global-material-module.module';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';


const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'register', component: SignUpComponent },
  { path: '', redirectTo: 'login', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forChild(routes), GlobalMaterialModuleModule, ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [AuthComponent, ForgetPasswordComponent, SignUpComponent],
  providers: [AuthService]
})
export class AuthRoutingModule { }
