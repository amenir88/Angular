import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  prop1 : string = "testVal1";
  constructor(private us:UserService) { }

  ngOnInit(): void {

    console.log(this.us.getAllUsers())
  }

  getVal(t:number){
    console.log("getVal()"+t);
  }

}
