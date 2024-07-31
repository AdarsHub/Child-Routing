import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatComponent } from "./chat.component";

const routes: Routes = [
    {
        path: '',
        component: ChatComponent,
        children: []
    }
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    providers: []
})
export class ChatRoutingModule { }