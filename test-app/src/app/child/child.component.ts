import { Component, OnInit, Optional } from '@angular/core';
import { AppComponent } from '../app.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(parent: AppComponent) {
    //setTimeout(() => console.log("Parent title %s", parent.title), 2000)
  }

  elementsChild = ['Label'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log('copied child');
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      //copyArrayItem(event.container.data, this.elementsChild, event.previousIndex, event.currentIndex);
    } else {
      console.log('transfered child');
      copyArrayItem(event.previousContainer.data, this.elementsChild, event.previousIndex, event.currentIndex);
      
    }
  }

  public name: string = "";
}
