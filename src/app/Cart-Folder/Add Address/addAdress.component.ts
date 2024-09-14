import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
    selector:'app-AddAdress',
    templateUrl:'./addAdress.component.html',
    styleUrls:['./addAdress.component.scss']
})
export class AddAddressComponent {

  @ViewChild('myModal', {static: false}) modal: ElementRef;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


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

  }