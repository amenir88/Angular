
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit, OnChanges {

  @Input() prop1 : string;
  @Output() modified = new EventEmitter<Number>();
  val : number = 0;
  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
    this.prop1=this.prop1.toUpperCase();
  }
  f(){
    //console.log("je suis le fils");
    this.modified.emit(this.val);
  }

}
