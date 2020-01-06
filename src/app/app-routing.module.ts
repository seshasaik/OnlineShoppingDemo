import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './_guards/route-guard.guard';


const routes: Routes = [
  { path: 'product', loadChildren: () => import('./feature/product/product.module').then(m => m.ProductModule), canActivate: [RouteGuard] },
  { path: 'customer', loadChildren: () => import('./feature/customer/customer.module').then(m => m.CustomerModule), canActivate: [RouteGuard] },
  { path: 'cart', loadChildren: () => import('./feature/shoping-cart/shoping-cart.module').then(m => m.ShopingCartModule), canActivate: [RouteGuard] },
  { path: 'inventory', loadChildren: () => import('./feature/inventory/inventory.module').then(m => m.InventoryModule), canActivate: [RouteGuard] },
  { path: 'order', loadChildren: () => import('./feature/order/order.module').then(m => m.OrderModule), canActivate: [RouteGuard] },
  { path: 'billing', loadChildren: () => import('./feature/billing/billing.module').then(m => m.BillingModule), canActivate: [RouteGuard] },
  { path: 'settings', loadChildren: () => import('./feature/settings/settings.module').then(m => m.SettingsModule), canActivate: [RouteGuard] },
  { path: 'supplier', loadChildren: () => import('./feature/supplier/supplier.module').then(m => m.SupplierModule), canActivate: [RouteGuard] },
  { path: 'auth', loadChildren: () => import('./feature/user/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [RouteGuard] },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
