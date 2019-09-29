import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubmitPage } from './student-submit.page';

describe('StudentSubmitPage', () => {
  let component: StudentSubmitPage;
  let fixture: ComponentFixture<StudentSubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSubmitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
