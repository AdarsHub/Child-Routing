import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { BuyNowComponent } from "./buyNow/buynow.component";


const routes: Routes = [
    {
        path: "",
        component: CartComponent
    },
    {
        path: 'purchase',
        component: BuyNowComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule { }