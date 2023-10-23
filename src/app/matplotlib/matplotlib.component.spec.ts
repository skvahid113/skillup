import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatplotlibComponent } from './matplotlib.component';

describe('MatplotlibComponent', () => {
  let component: MatplotlibComponent;
  let fixture: ComponentFixture<MatplotlibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatplotlibComponent]
    });
    fixture = TestBed.createComponent(MatplotlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
