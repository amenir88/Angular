import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  p:string="Bonjour je suis le p du fils";
  constructor() { }

  ngOnInit(): void {
  }
  f(x:Number){
    console.log("event sent + "+x);
  }

}
