import { Component, ViewChild } from "@angular/core";
import { CartService } from "../Services/Cart-Service/cart.service";
import { Router } from "@angular/router";
import { AddAddressComponent } from "./Add Address/addAdress.component";


@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  details: any[] = [];
  loopData: any[] = [];
  isLoader:any;
  @ViewChild('modal', { static: false }) modal: AddAddressComponent
  constructor(private cartService: CartService, private router: Router) {
    const stData: any = localStorage.getItem('details');
    let parsedData: any;
    if (stData) {
      try {
        parsedData = typeof stData === 'string' ? JSON.parse(stData) : stData;
      } catch (error) {
        console.error("Error parsing 'details' from localStorage:", error);
        parsedData = [];
      }
    }
    this.details = parsedData;

    if (Array.isArray(this.details)) {
      this.loopData = this.details.map((val: any, ind: any) => {
        if (typeof val === 'string') {
          try {
            val = JSON.parse(val);
          } catch (error) {
            console.error("Error parsing individual string element:", error);
          }
        }
        console.log(val, "111 Type", ind);
        return val;
      });
    }
  }

  removeFromBag(event: any) {
    this.loopData.forEach((val, ind) => {
      console.log(val, "test 1111 id")
      if (val.id === event.id) {
        console.log("id")
        this.loopData.splice(ind, 1)
        localStorage.setItem('details', JSON.stringify(this.loopData));
      } else {
        console.log("not ")
      }
    })
    console.log(this.loopData, "items ===60")
  }
  buy() {
  this.modal.open();
  console.log(this.modal);
    // this.router.navigate(['cart/purchase']);
    
  }
  decreaseQuantity(eve:any,ind?:number){
    if(eve.quantity>1){
      this.loopData.forEach((pr:any)=>{
        console.log(pr,"Product....")
        if(pr.id==eve.id){
          pr.quantity--;
          
        }
      })
      localStorage.setItem('details', JSON.stringify(this.loopData));
    }
    else if (eve.quantity === 1) {
      // If quantity is exactly 1, splice the item
      this.loopData.splice(ind, 1);
      localStorage.setItem('details', JSON.stringify(this.loopData));
    }
  
  }
  increaseQuantity(eve:any,ind?:number){
    console.log(eve,"Event Triggered...")
    this.loopData.forEach((pr:any)=>{
      if(pr.id==eve.id){
        pr.quantity++;
        console.log("product",pr)
      }
    })
    localStorage.setItem('details', JSON.stringify(this.loopData));
    
  }
  // prdts(eve:any){
  //   this.router.navigate(['/products'])
  // }
  // ngAfterViewInit(){
  //   console.log("Ng After View init...")
  //   // console.log("=====90");
  //   // console.log(this.loopData.length)
  //   if(!this.loopData.length){
  //    this.test()
 
  //   }
  // }
  test(){
    console.log("98======")
    this.router.navigate(['/products'])
  }
  // ngDoCheck(){
  //   console.log("Do Check Triggered...")
  //   if(!this.loopData.length){
  //     console.log("Condition Satisfied....");
  //     setTimeout(() => {   
  //       this.router.navigate(['/products']);
  //     }, 1500);

  //   }
  // }
  ngAfterViewChecked(){
    console.log("View Has Checked...")
    if(!this.loopData.length){
      setTimeout(()=>{
        this.test();
      },1000)
    }
  }
  shop(){
    this.router.navigate(['/products'])
  }

  loder(e){
    console.log(e,"Data Received from the parent")
    this.isLoader=e;
  }
}