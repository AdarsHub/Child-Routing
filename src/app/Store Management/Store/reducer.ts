import { createReducer, on } from "@ngrx/store";
import { data, decrement, double, getData, increment, productsCall, productsData, reset } from "./actions";


const initialCount = 0;

const testdata={
    arr:[]
}
const productData={
    products:[]
}

export const CounterReducer = createReducer(initialCount,
    on(increment, (inc) => ++inc),
    on(decrement, (dec) => --dec),
    on(reset, (rst) => rst = 0),
    on(double, (dbl) => dbl * 2)

)


export const ApiCallData=createReducer(testdata,on(data,(val:any,action:any)=>({...val,arr:action.data})))

export const ProductsDataReducer=createReducer(productData,on(productsData,(val:any,action:any)=>({...val,products:action.products})))
