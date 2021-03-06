import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsReceiptNotesRoutingModule } from './goods-receipt-notes-routing.module';
import { CreateGoodsReceiptComponent } from './component/create-goods-receipt/create-goods-receipt.component';
import { GoodsReceiptNotesComponent } from './component/goods-receipt-notes-list/goods-receipt-notes.component';
import { GoodsReceiptNotesService } from './service/goods-receipt-notes.service';
import { PurchaseOrderService } from '../purchase-order/service/purchase-order.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedDirectivesModule } from 'src/app/shared-directives/shared-directives.module';
import { CustomizedPipesModule } from 'src/app/_pipe/customized-pipes.module';



@NgModule({
  declarations: [
    GoodsReceiptNotesComponent,
     CreateGoodsReceiptComponent    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlobalMaterialModule,
    FlexLayoutModule,
    SharedDirectivesModule,
    CustomizedPipesModule,
    GoodsReceiptNotesRoutingModule
  ],
  providers: [
    GoodsReceiptNotesService,
    PurchaseOrderService
  ]
})
export class GoodsReceiptNotesModule { }
