import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './feature/product/add-product/add-product.component';
import { EditProductComponent } from './feature/product/edit-product/edit-product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { GlobalMaterialModuleModule } from './global-material-module/global-material-module.module';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    SideMenuComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    GlobalMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
