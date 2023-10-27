import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBodyComponent } from './quiz-body.component';

describe('QuizBodyComponent', () => {
  let component: QuizBodyComponent;
  let fixture: ComponentFixture<QuizBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizBodyComponent]
    });
    fixture = TestBed.createComponent(QuizBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
