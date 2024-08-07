import { createReducer, on } from "@ngrx/store";
import { data, decrement, double, getData, increment, reset } from "./actions";


const initialCount = 0;

const testdata={
    arr:[]
}

export const CounterReducer = createReducer(initialCount,
    on(increment, (inc) => ++inc),
    on(decrement, (dec) => --dec),
    on(reset, (rst) => rst = 0),
    on(double, (dbl) => dbl * 2)

)


export const ApiCallData=createReducer(testdata,on(data,(val:any,action:any)=>({...val,arr:action.data})))