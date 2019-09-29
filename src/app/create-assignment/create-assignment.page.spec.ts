import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssignmentPage } from './create-assignment.page';

describe('CreateAssignmentPage', () => {
  let component: CreateAssignmentPage;
  let fixture: ComponentFixture<CreateAssignmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssignmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
