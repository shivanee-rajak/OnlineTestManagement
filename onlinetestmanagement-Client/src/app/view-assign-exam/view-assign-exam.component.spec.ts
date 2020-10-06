import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignExamComponent } from './view-assign-exam.component';

describe('ViewAssignExamComponent', () => {
  let component: ViewAssignExamComponent;
  let fixture: ComponentFixture<ViewAssignExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssignExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
