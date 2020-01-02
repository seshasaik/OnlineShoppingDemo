import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material'


@NgModule({
  declarations: [
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ],
  imports: [
    CommonModule
  ]
})
export class GlobalMaterialModuleModule { }
