import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router"
import {ModalComponent} from "./modal/modal.component"

const routes: Routes = [
    {
        path: '',
        component: ModalComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModalRouting { }