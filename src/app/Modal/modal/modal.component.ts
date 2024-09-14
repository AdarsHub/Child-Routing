import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Input() message:any;
@Input() status:any;
@Input() counter:any;
// counter:number=3;
// intervelId:any;
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('myModal', {static: false}) modal: ElementRef;

  open() {
    if(this.modal){
      // this.modal.nativeElement.style.display = 'block';
      this.modal.nativeElement.style.display = 'flex';
      // this.counter=3;
      // this.startTimer();
      console.log(this.modal,"modal Avlble")
    }else{
      console.log(this.modal,"Modal not available...")
    }
  }

  onCloseOverlay(eve?:any) {
    this.modal.nativeElement.style.display = 'none';
  }
  close(){
    this.modal.nativeElement.style.display = 'none';
  }
//   startTimer(){
// this.intervelId=setInterval(()=>{
//   this.counter--;
//   if(this.counter<=0){
//     clearInterval(this.intervelId)
//     this.counter=0;
//   }
// },1000)
//   }
 
}
