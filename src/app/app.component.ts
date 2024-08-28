import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular11-app';
  isLoader:any;
  loder(e){
    console.log(e,"Data Received from the parent")
    this.isLoader=e;
  }
}
