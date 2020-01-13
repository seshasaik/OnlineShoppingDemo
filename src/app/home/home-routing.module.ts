import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'product', loadChildren: () => import('../feature/product/product.module').then(m => m.ProductModule), outlet: 'home' },
  { path: 'customer', loadChildren: () => import('../feature/customer/customer.module').then(m => m.CustomerModule), outlet: 'home' },
  { path: 'cart', loadChildren: () => import('../feature/shoping-cart/shoping-cart.module').then(m => m.ShopingCartModule), outlet: 'home' },
  { path: 'inventory', loadChildren: () => import('../feature/inventory/inventory.module').then(m => m.InventoryModule), outlet: 'home' },
  { path: 'order', loadChildren: () => import('../feature/order/order.module').then(m => m.OrderModule), outlet: 'home' },
  { path: 'billing', loadChildren: () => import('../feature/billing/billing.module').then(m => m.BillingModule), outlet: 'home' },
  { path: 'settings', loadChildren: () => import('../feature/settings/settings.module').then(m => m.SettingsModule), outlet: 'home' },
  { path: 'supplier', loadChildren: () => import('../feature/supplier/supplier.module').then(m => m.SupplierModule), outlet: 'home' },
  // { path: 'dashboard', loadChildren: () => import('../feature/dashboard/dashboard.module').then(m => m.DashboardModule), outlet: 'home' },    
  { path: '', redirectTo: 'customer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
