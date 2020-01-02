import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalMaterialModuleModule } from 'src/app/global-material-module/global-material-module.module';
import { AuthService } from './auth-service.service';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    GlobalMaterialModuleModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
