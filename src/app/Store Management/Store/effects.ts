import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { UserService } from "src/app/Chat/userService/user.service";
import { data, getData } from "./actions";



@Injectable()

export class futureSelector{

    getData$=createEffect(()=>{return this._action.pipe(
        ofType(getData),
        switchMap(() => this.userService.getData().pipe(map((res: any) => {
            return data({ data: res });
        })))
    );})



    constructor(private _action:Actions,private userService:UserService){

    }
}