import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { CartRoutingModule } from "./cart.routing";
import { CommonModule } from "@angular/common";
import { CartService } from "../Services/Cart-Service/cart.service";
import { BuyNowComponent } from "./buyNow/buynow.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoderModule } from "../loder/loder.module";
import {AddAddressComponent} from "./Add Address/addAdress.component"
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';    
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button'; // If using mat-button
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input"
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

@NgModule({
    declarations: [
        CartComponent,
        BuyNowComponent,
        AddAddressComponent
    ],
    imports: [
        CartRoutingModule,
        CommonModule,
        FormsModule,
        LoderModule,
        MatStepperModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule ,
        MatIconModule
    ],
    providers: [CartService,
        {
            provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
          }
    ],
    
})
export class CartModule { }

