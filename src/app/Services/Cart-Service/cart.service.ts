
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class CartService{

cartData=new BehaviorSubject<any[]>([]);
cartObservable=this.cartData.asObservable();
    cartItems:any[]=[];


constructor(){

}

addToCart(item: any) {
  item.quantity=1;
    const dta = localStorage.getItem('details');
    let cartData = dta ? JSON.parse(dta) : [];
    cartData = cartData.flat().filter((val: any) => {
      return typeof val === 'object' && val !== null && !Array.isArray(val);
    });
  
    if (typeof item === 'object' && item !== null) {
      cartData.push(item);
    }
    localStorage.setItem('details', JSON.stringify(cartData));
    console.log(cartData, "Updated Cart Data");
  }
  
  

}