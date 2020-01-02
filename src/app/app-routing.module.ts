import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'product', loadChildren: () => import('./feature/product/product.module').then(m => m.ProductModule) },
  { path: 'customer', loadChildren: () => import('./feature/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'cart', loadChildren: () => import('./feature/shoping-cart/shoping-cart.module').then(m => m.ShopingCartModule) },
  { path: 'inventory', loadChildren: () => import('./feature/inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'order', loadChildren: () => import('./feature/order/order.module').then(m => m.OrderModule) },
  { path: 'billing', loadChildren: () => import('./feature/billing/billing.module').then(m => m.BillingModule) },
  { path: 'settings', loadChildren: () => import('./feature/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'supplier', loadChildren: () => import('./feature/supplier/supplier.module').then(m => m.SupplierModule) },
  { path: 'auth', loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
