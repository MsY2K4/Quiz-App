import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateQuizzesComponent } from './navigate-quizzes.component';

describe('NavigateQuizzesComponent', () => {
  let component: NavigateQuizzesComponent;
  let fixture: ComponentFixture<NavigateQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigateQuizzesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigateQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
