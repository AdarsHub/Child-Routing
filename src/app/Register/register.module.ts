import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { RegisterRoutingModule } from "./register/register.routing";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports:[RegisterRoutingModule,CommonModule,FormsModule,ReactiveFormsModule],
    declarations:[RegisterComponent],
    providers:[]
})

export class RegisterModule{}