import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CustomerComponent } from "./customer.component"
import { CustomerDetailsComponent } from "./customer-details/customer-details.component"
import { CustomerListComponent } from "./customer-list/customer-list.component"

const routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            {
                path: ':id/pr-details',
                component: CustomerDetailsComponent
            },
            {
                path:'',
                component:CustomerListComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CustomerRoutingModule {

}