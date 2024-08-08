import { createAction, props } from "@ngrx/store";

export const increment=createAction("[Action Inc], Increment");

export const decrement=createAction("[Action Dec], Decrement");

export const reset=createAction("[Action Reset], Reset");

export const double=createAction("[Action Double], Double")

// ===============API CALLING IN EFFECTS ===================\\

export const getData=createAction("[Action Data], get Data");

export const data=createAction("[Action data], data",props<{data:any}>());
// ======= Products Api Call  ================

export const productsCall=createAction("[Action Products],get Products")

export const productsData=createAction("[Action data], data",props<{products:any}>());
