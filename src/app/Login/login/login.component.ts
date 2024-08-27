import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   mockUsers=[
    {userName:"Adarsh",password:"adarsh111"},
    {userName:"user1",password:"user@34"}

  ]
    userForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { 
    this.userForm=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      // email:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      let user=this.userForm.value;

      this.mockUsers.forEach((val:any)=>{
     if(val.userName==user.userName &&val.password==user.password){
this.router.navigate(['/Home', ],
  {
      // skipLocationChange: true,
      state: { data: user },
      replaceUrl: true
  }
)
     }
      })
    }
  }
}
