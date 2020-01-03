import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material'


@NgModule({
  declarations: [
    
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,  
    MatExpansionModule,
        
  ],
  imports: [
    CommonModule
  ]
})
export class GlobalMaterialModuleModule { }
