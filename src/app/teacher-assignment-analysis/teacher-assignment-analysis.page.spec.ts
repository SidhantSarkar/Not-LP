import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAssignmentAnalysisPage } from './teacher-assignment-analysis.page';

describe('TeacherAssignmentAnalysisPage', () => {
  let component: TeacherAssignmentAnalysisPage;
  let fixture: ComponentFixture<TeacherAssignmentAnalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAssignmentAnalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAssignmentAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
