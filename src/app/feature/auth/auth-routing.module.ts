import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './login/auth.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { ForgetPasswordModule } from './forget-password/forget-password.module';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SignUpModule, ForgetPasswordModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
