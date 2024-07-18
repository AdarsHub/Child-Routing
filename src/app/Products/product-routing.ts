import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProductComponent } from "./product.component"
import { ProductListComponent } from "./product-list/product-list.component"
import { ProductDetailsComponent } from "./product-details/product-details.component"

const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: 'id/detail',
                component: ProductDetailsComponent
            }
        ]
    }

]
@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    // declarations:[ProductComponent,ProductDetailsComponent,ProductListComponent]
})
export class ProductRoutingModule {

}