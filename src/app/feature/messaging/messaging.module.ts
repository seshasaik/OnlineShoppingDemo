import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagingService } from './messaging.service';



@NgModule({
  declarations: [MessagingComponent],
  imports: [
    CommonModule,
    GlobalMaterialModule,
    FlexLayoutModule
  ],
  providers: [MessagingService],
  exports: [MessagingComponent]
})
export class MessagingModule { }
