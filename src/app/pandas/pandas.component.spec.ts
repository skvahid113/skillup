import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandasComponent } from './pandas.component';

describe('PandasComponent', () => {
  let component: PandasComponent;
  let fixture: ComponentFixture<PandasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PandasComponent]
    });
    fixture = TestBed.createComponent(PandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
