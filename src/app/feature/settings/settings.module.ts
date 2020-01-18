import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { SettingsService } from './service/settings.service';



@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    GlobalMaterialModule,
    SettingsRoutingModule,
  ],
  providers: [SettingsService],
  declarations: [ChangePasswordComponent, ProfileComponent]
})
export class SettingsModule { }
