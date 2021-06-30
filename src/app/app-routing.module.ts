import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },

    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
    { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
    
    { 
      path: 'admin/products', 
      component: AdminProductsComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
      path: 'admin/products/new', 
      component: ProductFormComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
      path: 'admin/products/:id', 
      component: ProductFormComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
      path: 'admin/orders', 
      component: AdminOrdersComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService] 
    },

    { path: '**', component: NotFoundComponent },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
