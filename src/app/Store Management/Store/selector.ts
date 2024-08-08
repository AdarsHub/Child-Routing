import { createFeatureSelector, createSelector } from "@ngrx/store";


const futureSelector=createFeatureSelector('count');

export const CounterValue=createSelector(futureSelector,(val)=>val);


const apiUserData=createFeatureSelector("testApi");

export const data=createSelector(apiUserData,(val)=>val);


const produductFutureSelector=createFeatureSelector("products");

export const productsData=createSelector(produductFutureSelector,(val)=>val);