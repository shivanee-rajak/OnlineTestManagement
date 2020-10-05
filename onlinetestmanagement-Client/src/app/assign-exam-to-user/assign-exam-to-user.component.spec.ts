import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignExamToUserComponent } from './assign-exam-to-user.component';

describe('AssignExamToUserComponent', () => {
  let component: AssignExamToUserComponent;
  let fixture: ComponentFixture<AssignExamToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignExamToUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignExamToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
