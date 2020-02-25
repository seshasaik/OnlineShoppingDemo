import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HomeComponent } from './home.component';
import { GlobalMaterialModule } from '../global-material-module/global-material-module.module';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [SidemenuComponent, HomeComponent, TopMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    GlobalMaterialModule
  ]
})
export class HomeModule { }
