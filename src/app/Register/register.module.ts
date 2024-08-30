import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { RegisterRoutingModule } from "./register/register.routing";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoderModule } from "../loder/loder.module";


@NgModule({
    imports:[RegisterRoutingModule,CommonModule,FormsModule,ReactiveFormsModule,LoderModule],
    declarations:[RegisterComponent],
    providers:[]
})

export class RegisterModule{}