import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-drag-fields',
  templateUrl: './section-drag-fields.component.html',
  styleUrls: ['./section-drag-fields.component.css']
})
export class SectionDragFieldsComponent implements OnInit {
  elements = [ 'input', 'button'];
  constructor() { }

  ngOnInit(): void {
  }

}
