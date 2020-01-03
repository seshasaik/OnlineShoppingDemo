import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { GlobalMaterialModuleModule } from './global-material-module/global-material-module.module';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { AppRouterService } from './services/app-router.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalMaterialModuleModule,
    AppRoutingModule,
  ],
  providers: [AppRouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
