import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'


@NgModule({
  declarations: [
  ],
  exports: [
    MatSidenavModule,
    MatListModule

  ],
  imports: [
    CommonModule
  ]
})
export class GlobalMaterialModuleModule { }
