import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TclComponent } from './tcl.component';

describe('TclComponent', () => {
  let component: TclComponent;
  let fixture: ComponentFixture<TclComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TclComponent]
    });
    fixture = TestBed.createComponent(TclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
