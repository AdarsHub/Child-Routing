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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
  export class AppRoutingModule { }
