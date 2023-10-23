import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpyComponent } from './numpy.component';

describe('NumpyComponent', () => {
  let component: NumpyComponent;
  let fixture: ComponentFixture<NumpyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumpyComponent]
    });
    fixture = TestBed.createComponent(NumpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
