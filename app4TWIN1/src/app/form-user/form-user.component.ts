import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  categorie="Customer";
  list : User[] = [];
  user : User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    this.user.idCustomer=this.list.length + 1;
    this.user.accountCategory=this.categorie;
    this.list.push(this.user);
    this.user=new User();
   console.log(this.list);
  }

}
