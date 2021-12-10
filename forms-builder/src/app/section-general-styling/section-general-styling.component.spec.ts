import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGeneralStylingComponent } from './section-general-styling.component';

describe('SectionGeneralStylingComponent', () => {
  let component: SectionGeneralStylingComponent;
  let fixture: ComponentFixture<SectionGeneralStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGeneralStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGeneralStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
