import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderComponent } from './component/purchase-order/purchase-order.component';
import { NewPurchaseOrderComponent } from './component/new-purchase-order/new-purchase-order.component';
import { EditPurchaseOrderComponent } from './component/edit-purchase-order/edit-purchase-order.component';
import { PurchaseOrderService } from './service/purchase-order.service';
import { SupplierService } from '../supplier/service/supplier.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';
import { ProductViewModalComponent } from './component/product-view-modal/product-view-modal.component';
import { SharedDirectivesModule } from 'src/app/shared-directives/shared-directives.module';
import { CustomizedPipesModule } from 'src/app/_pipe/customized-pipes.module';


@NgModule({
  declarations: [
    PurchaseOrderComponent,
    NewPurchaseOrderComponent,
    EditPurchaseOrderComponent,
    ProductViewModalComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    GlobalMaterialModule,
    SharedDirectivesModule,
    CustomizedPipesModule,
    PurchaseOrderRoutingModule
  ],
  providers: [
    PurchaseOrderService,
    SupplierService
  ], entryComponents: [
    ProductViewModalComponent
  ]
})
export class PurchaseOrderModule { }
