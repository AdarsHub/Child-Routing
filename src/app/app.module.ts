import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ApiCallData, CounterReducer, ProductsDataReducer } from './Store Management/Store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { futureSelector } from './Store Management/Store/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ count: CounterReducer,testApi:ApiCallData,products:ProductsDataReducer }),
    EffectsModule.forRoot([futureSelector])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
