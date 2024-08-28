import { NgModule } from "@angular/core";
import { LoderComponent } from "./loder/loder.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[LoderComponent],
    imports:[CommonModule],
  exports:[LoderComponent]

})
export class LoderModule{}