import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  myForm : FormGroup;
  name:FormControl;
  mescnx:any;
  constructor() { }

  ngOnInit(): void {
    this.name=new FormControl('test');
    this.myForm=new FormGroup({
      email:new FormControl({value:'',disabled:true}, [Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      pwd: new FormControl('',[Validators.pattern("^[a-zA-Z0-9]{8,}?")])
    })
  }
  get myemail(){
   // return this.myForm.get('email');
     return this.myForm.controls.email;
  }
  add(){
    console.log(this.myForm.getRawValue());
    //this.mescnx.push(this.myForm.value);
    this.mescnx.push(this.myForm.getRawValue());
    this.myForm.reset();
    }

}
