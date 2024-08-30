import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPswd: boolean = false;
  confshowPswd: boolean = false;
  registerForm: FormGroup;
  isSubmit:boolean=false;
  isLoader:boolean=true;
  constructor(private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      pswd: ['', Validators.required],
      confpswd: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  toggleVisibility() {
    this.showPswd = !this.showPswd;
  }
  onSubmit() {
    this.isSubmit=true;
    if (this.registerForm.valid) {
      console.log(this.registerForm, "Form Submited...");
    } else {
      alert("Please fill the all mandatory fields..");
    }
  }
  loder(e){
    console.log(e,"Data Received from the parent")
    this.isLoader=e;
  }

}
