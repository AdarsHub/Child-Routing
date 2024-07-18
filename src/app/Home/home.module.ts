import {NgModule} from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home.routing';

@NgModule({
    imports:[HomeComponentRoutingModule],
    declarations:[HomeComponent],
    providers:[]
})
export class HomeComponentModule{}