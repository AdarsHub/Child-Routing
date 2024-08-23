import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { CartRoutingModule } from "./cart.routing";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { CartService } from "../Services/Cart-Service/cart.service";
import { BuyNowComponent } from "./buyNow/buynow.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CartComponent,
        BuyNowComponent
    ],
    imports: [
        CartRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: [CartService]
})
export class CartModule { }

