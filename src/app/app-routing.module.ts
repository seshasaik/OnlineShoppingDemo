import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './_guards/route-guard.guard';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'dashboard', component: HomeComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [RouteGuard] },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    // { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
