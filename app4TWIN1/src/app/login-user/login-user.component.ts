import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  myForm : FormGroup;
  cnx : any=[];
  secondes:number;
  msg:string="";
  constructor() { }

  ngOnInit(): void {
    {
      //exemple 1
      const counter$ = interval(1000);
      counter$.subscribe(
        (value) => {
          //console.log(value);
          this.secondes=value;
          if(this.secondes == 20){
            this.msg="finish";
           // counter.unsubscribe();
          }
        },
        (error) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete!');
        }
      );
      //exemple 2
     /* const numbers = interval(1000);
 
const takeFourNumbers = numbers.pipe(take(10));
 
takeFourNumbers.subscribe(x => this.secondes=x, error=> console.log(error),()=>this.msg="finish");
      */
   // this.ms.getValue().subscribe(res=>console.log(res))
      }
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

  finish(){
    this.msg="finish";
  }

}
