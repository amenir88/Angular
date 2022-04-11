import { Component, ViewChild } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app4TWIN1';
  @ViewChild(ParentComponent) monFils:ParentComponent;

  first(){
    
     console.log(this.monFils.p);
     console.log("Bonjour");
  }
}
