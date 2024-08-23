
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
    // Fetch existing cart items from localStorage
    const dta = localStorage.getItem('details');
    
    // Parse the existing data or initialize an empty array if nothing is stored
    let cartData = dta ? JSON.parse(dta) : [];
  
    // Clean up the existing data by removing any nested arrays or invalid items
    cartData = cartData.flat().filter((val: any) => {
      // Ensure it's an object and not null or an empty string
      return typeof val === 'object' && val !== null && !Array.isArray(val);
    });
  
    // Add the new item to the cart array if it's a valid object
    if (typeof item === 'object' && item !== null) {
      cartData.push(item);
    }
  
    // Update the cart items in localStorage
    localStorage.setItem('details', JSON.stringify(cartData));
  
    // Log for debugging purposes
    console.log(cartData, "Updated Cart Data");
  }
  
  

}