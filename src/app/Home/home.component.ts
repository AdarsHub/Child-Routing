import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  greetingsUser:any;
  constructor(private router:Router) {
    const data=this.router.getCurrentNavigation();
    this.greetingsUser=data?.extras?.state?.data.userName;
    console.log(data?.extras?.state?.data,"111")
   }

  ngOnInit(): void {
    console.log("Home...")
  }

}
