import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular11-app';
  isLoader=true;
  ngOnInit(){
    setTimeout(() => {
      this.isLoader=false;
    }, 2000);
  }
}
