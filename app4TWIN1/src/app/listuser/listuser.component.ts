import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
 // providers:[UserService]
})
export class ListuserComponent implements OnInit {
   list : User[];
   listInitiale : User[];
   prop1="x";
   prop2="testngmodel";
   prop3="test";
   searchval="test";
  constructor(private us:UserService, private ac:ActivatedRoute) { }
  getVal(val:string){
  
    this.prop1=val;
    console.log(this.prop1);
  }

  ngOnInit(): void {
    //this.list=this.us.getAllUsers();
    this.us.getAllUsersFormDb().subscribe(res=>{
      this.list=res; 
      this.listInitiale=this.list;
      this.ac.paramMap.subscribe(
      res => {
      console.log(res.get('cat')); 
      this.list=this.listInitiale.filter((user) =>{
         return user.accountCategory === res.get('cat');//return user.accountCategory === res.get('category')  ;
      });
    });
  })
   /* this.ac.paramMap.subscribe(
      res=>console.log(res.get('cat')));*/
    
//this.listInitiale=this.list;
     


  }
  

deleteUser(i:number){
this.list.splice(i,1);
console.log(this.list);
}
}
