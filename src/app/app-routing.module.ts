import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Product-Details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./Products/products.module').then(module => module.ProductsModule),
  },
  {
    path: '',
    loadChildren: () => import('./Home/home.module').then(m => m.HomeComponentModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./Customers/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./Chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./Store Management/storeManager.module').then(module => module.StoreManagerModule)
  },
  {
    path: 'pr-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./Cart-Folder/cart.module').then((m) => m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
