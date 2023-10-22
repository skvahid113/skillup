import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathFunctionsComponent } from './math-functions.component';

describe('MathFunctionsComponent', () => {
  let component: MathFunctionsComponent;
  let fixture: ComponentFixture<MathFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathFunctionsComponent]
    });
    fixture = TestBed.createComponent(MathFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
