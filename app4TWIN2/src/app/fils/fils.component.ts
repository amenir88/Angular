import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit, OnChanges {

  @Input() prop1:string;
  @Output() notified = 
  new EventEmitter<number>();
  //prop2:string;
  constructor() { 
    console.log("je suis le constructor");
  }
  sendNotif(){
    this.notified.emit(5);
  }

  ngOnInit(): void {
    console.log("je suis le ngOnInit");
  }

  ngOnChanges(){
    console.log("je suis le ngOnChanges");
  }

}
