import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDragFieldsComponent } from './section-drag-fields.component';

describe('SectionDragFieldsComponent', () => {
  let component: SectionDragFieldsComponent;
  let fixture: ComponentFixture<SectionDragFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDragFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDragFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
