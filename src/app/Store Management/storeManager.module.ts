import { NgModule } from "@angular/core";
import { StoreComponent } from "./StoreComponents/store.component";
import { StoreManageRoutingModule } from "./storeManager-Routing";
import { StoreModule } from "@ngrx/store";
import { ApiCallData, CounterReducer } from "./Store/reducer";
import { EffectsModule } from "@ngrx/effects";
import { futureSelector } from "./Store/effects";



@NgModule({
    declarations: [StoreComponent],
    providers: [],
    imports: [StoreManageRoutingModule,
        StoreModule.forRoot({ count: CounterReducer,testApi:ApiCallData }),
        EffectsModule.forRoot([futureSelector])
    ]
})
export class StoreManagerModule { }