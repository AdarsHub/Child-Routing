import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerRoutingModule } from "./customer-routing";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
    imports:[CustomerRoutingModule,CommonModule,HttpClientModule],
    declarations:[CustomerComponent,CustomerDetailsComponent,CustomerListComponent]
})
export class CustomerModule{

}