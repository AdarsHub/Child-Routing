import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product.component";



@NgModule({
    imports: [ProductsModule, CommonModule],
    declarations: [ProductComponent, ProductListComponent, ProductDetailsComponent]
})
export class ProductsModule {

}