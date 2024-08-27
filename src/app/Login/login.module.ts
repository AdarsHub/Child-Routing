import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login.routing";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    imports:[FormsModule,ReactiveFormsModule,LoginRoutingModule,CommonModule],
    declarations:[LoginComponent],
    providers:[]
})
export class LoginModule{

}