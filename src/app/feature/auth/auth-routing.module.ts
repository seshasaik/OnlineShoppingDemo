import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './component/login/auth.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'register', component: SignUpComponent },
  { path: '', redirectTo: 'login', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AuthRoutingModule { }
