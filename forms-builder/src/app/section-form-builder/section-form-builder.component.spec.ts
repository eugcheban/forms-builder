import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFormBuilderComponent } from './section-form-builder.component';

describe('SectionFormBuilderComponent', () => {
  let component: SectionFormBuilderComponent;
  let fixture: ComponentFixture<SectionFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
