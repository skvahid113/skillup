import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScipyComponent } from './scipy.component';

describe('ScipyComponent', () => {
  let component: ScipyComponent;
  let fixture: ComponentFixture<ScipyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScipyComponent]
    });
    fixture = TestBed.createComponent(ScipyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
