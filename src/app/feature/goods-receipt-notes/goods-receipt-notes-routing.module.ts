import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsReceiptNotesComponent } from './component/goods-receipt-notes-list/goods-receipt-notes.component';
import { CreateGoodsReceiptComponent } from './component/create-goods-receipt/create-goods-receipt.component';

const routes: Routes = [
  { path: 'list', component: GoodsReceiptNotesComponent },
  { path: 'add', component: CreateGoodsReceiptComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsReceiptNotesRoutingModule { }
