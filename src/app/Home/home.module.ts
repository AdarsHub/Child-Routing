import {NgModule} from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home.routing';
import { LoderModule } from '../loder/loder.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[HomeComponentRoutingModule,LoderModule,CommonModule],
    declarations:[HomeComponent],
    providers:[]
})
export class HomeComponentModule{}