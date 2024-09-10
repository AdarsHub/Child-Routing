import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login.routing";
import { CommonModule } from "@angular/common";
import { LoderModule } from "../loder/loder.module";
import { ModalModule } from "../Modal/modal.module";


@NgModule({
    imports:[FormsModule,ReactiveFormsModule,LoginRoutingModule,CommonModule,LoderModule,ModalModule],
    declarations:[LoginComponent],
    providers:[]
})
export class LoginModule{

}