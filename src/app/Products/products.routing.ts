import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component.';
import { GroceryComponent } from './Groceries/grocery.component';
import { OffersComponent } from './Offers/offers.component';
import { PlasticComponent } from './Plastics/plastic.component';
import { ClothsComponent } from './Cloths/cloths.component';


const route: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            {
                path: 'groceries',
                component: GroceryComponent,
            },

        ]
    },
    {
        path: 'offers',
        component: OffersComponent,
        children: [
            {
                path: 'plastics',
                component: PlasticComponent
            },
            {
                path: 'cloths',
                component: ClothsComponent
            }
        ]
    }

]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }