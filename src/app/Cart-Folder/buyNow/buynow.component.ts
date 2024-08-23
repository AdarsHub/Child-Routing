import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";


@Component({
    selector:'app-buy',
    templateUrl:'./buynow.component.html',
    styleUrls:['./buynow.component.scss']
})
export class BuyNowComponent{


    phoneNumber: string = '';
    amount: number = 0;
  
    constructor(private http: HttpClient) {}
  
    onSubmit() {
      const payload = {
        phoneNumber: this.phoneNumber,
        amount: this.amount,
      };
  
      this.http.post('http://localhost:3000/notify', payload).subscribe(response => {
        console.log('Notification sent:', response);
      });
    }
  }