import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullComponent } from './null.component';

describe('NullComponent', () => {
  let component: NullComponent;
  let fixture: ComponentFixture<NullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NullComponent]
    });
    fixture = TestBed.createComponent(NullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
