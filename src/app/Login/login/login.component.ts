import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/Modal/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: any;
  status: any;
  mockUsers =
    [
      { userName: "Adarsh", password: "adarsh111" },
      { userName: "user1", password: "user@34" }
    ]
  userForm: FormGroup;
  isLoader: boolean = true;
  @ViewChild('modal', { static: false }) modal: ModalComponent
  intervelId:any;
  counter:number=3;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      // email:['',Validators.required]
    })
  }

  loder(e: any) {
    this.isLoader = e;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      let user = this.userForm.value;
      let login = false;
      this.mockUsers.forEach((val: any) => {
        if (val.userName == user.userName && val.password == user.password) {
          console.log("If Triggered...")
          login = true;
          // this.router.navigate(['/Home',],
          //   {
          //     // skipLocationChange: true,
          //  queryParams:{"userName":user.userName},
          //     state: { data: user },
          //     replaceUrl: true
          //   }
          // )
        }
      })
      if (login) {
        this.message = "Login Succefull"
        this.status = 'success';
        this.counter=3;
        this.startTimer();
        if(this.counter==0){
       
        }
       
      } else {
        this.message = "Incorrect Details...";
        this.status = "danger";
       
      }
    }
    this.openModal();
  }
  openModal() {
    this.modal.open();
  }
  ngAfterViewInit() {
    // Ensure this.modal is available
    console.log(this.modal);
  }
  startTimer() {
    this.intervelId = setInterval(() => {
      this.counter--;
      if (this.counter <= 0) {
        clearInterval(this.intervelId)
        this.counter = 0;
        this.router.navigate(['/Home',],
          {
            // skipLocationChange: true,
         queryParams:{"userName": this.userForm.value.userName},
            state: { data:  this.userForm.value },
            replaceUrl: true
          }
        )
      }
    }, 1000)
  }
}
