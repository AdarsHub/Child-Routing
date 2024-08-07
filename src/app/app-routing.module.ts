import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Product-Details/product-details.component';

const routes: Routes = [
  {
    path:'products',
    loadChildren:()=>import('./Products/products.module').then(module=>module.ProductsModule),
  },
  {
    path:'home',
    loadChildren:()=>import('./Home/home.module').then(m=>m.HomeComponentModule)
  },{
    path:'pr-details/:id',
    component:ProductDetailsComponent
  },
  {
    path:'customers',
    loadChildren:()=>import('./Customers/customer.module').then(module=>module.CustomerModule)
  },
  {
    path:'chat',
    loadChildren:()=>import('./Chat/chat.module').then(m=>m.ChatModule)
  },
  {
    path:'store',
    loadChildren:()=>import('./Store Management/storeManager.module').then(module=>module.StoreManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
  export class AppRoutingModule { }
