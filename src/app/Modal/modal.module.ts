import { NgModule } from "@angular/core";
import { ModalRouting } from "./modal-routing";
import { CommonModule } from "@angular/common";
import { ModalComponent } from './modal/modal.component';


@NgModule({
    imports:[ModalRouting,CommonModule],
    declarations:[
    ModalComponent
  ],
  exports:[ModalComponent],
    providers:[]
})
export class ModalModule{

}