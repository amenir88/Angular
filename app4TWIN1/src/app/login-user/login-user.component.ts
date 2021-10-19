import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  myForm : FormGroup;
  cnx : any=[];
  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({  //<form>
       pwd:new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}?")]),
       email : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
       sg:new FormGroup({

       })
      })
  }

  get myemail() {
    return this.myForm.get('email');
  }

  requiredMail(){
    if (this.myemail.errors.required){
      return true;
    }
    else return false;
  }

}
