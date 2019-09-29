import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewMarksPage } from './student-view-marks.page';

describe('StudentViewMarksPage', () => {
  let component: StudentViewMarksPage;
  let fixture: ComponentFixture<StudentViewMarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewMarksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewMarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
