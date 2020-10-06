import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignExamComponent } from './edit-assign-exam.component';

describe('EditAssignExamComponent', () => {
  let component: EditAssignExamComponent;
  let fixture: ComponentFixture<EditAssignExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssignExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssignExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
