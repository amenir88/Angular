import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   myVal:string="Bonjour";
  constructor() { }

  ngOnInit(): void {
  }
  f(n:number){
    console.log(n);
    console.log("bouton clicked");
  }

}
