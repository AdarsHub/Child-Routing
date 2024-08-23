import { Component } from "@angular/core";
import { CartService } from "../Services/Cart-Service/cart.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  details: any[] = [];
  loopData: any[] = [];
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
        console.log(typeof val, "111 Type", ind);
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
    this.router.navigate(['cart/purchase']);
  }
}