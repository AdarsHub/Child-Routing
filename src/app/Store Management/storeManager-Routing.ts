import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './StoreComponents/store.component';
    
const routes:Routes=[
    {
        path:'',
        component:StoreComponent
    }
]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[]
})
export class StoreManageRoutingModule{}