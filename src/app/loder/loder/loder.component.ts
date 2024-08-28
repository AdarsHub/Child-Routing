import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loder',
  templateUrl: './loder.component.html',
  styleUrls: ['./loder.component.scss']
})
export class LoderComponent implements OnInit {
  isLoader: boolean=true;
@Output() load:any=new EventEmitter();
  constructor() { }
  ngOnInit(){
    this.load.emit(true)
    setTimeout(() => {
      this.isLoader=false;
    this.load.emit(false)
    }, 1500);
  }

}
