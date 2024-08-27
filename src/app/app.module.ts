import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ApiCallData, CounterReducer, ProductsDataReducer } from './Store Management/Store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { futureSelector } from './Store Management/Store/effects';
import { ProductDetailsComponent } from './Product-Details/product-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forRoot({ count: CounterReducer,testApi:ApiCallData,products:ProductsDataReducer }),
    EffectsModule.forRoot([futureSelector]),
    ReactiveFormsModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
