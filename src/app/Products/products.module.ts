import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component.";
import { ProductsRoutingModule } from './products.routing'
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { GroceryComponent } from "./Groceries/grocery.component";
import { OffersComponent } from "./Offers/offers.component";
import { PlasticComponent } from "./Plastics/plastic.component";
import { ClothsComponent } from "./Cloths/cloths.component";


@NgModule({
    declarations: [
        ProductsComponent,
        GroceryComponent,
        OffersComponent,
        PlasticComponent,
        ClothsComponent
    ],
    imports: [
        ProductsRoutingModule,
        HttpClientModule,
        CommonModule
    ],
    providers: []
})
export class ProductsModule { }