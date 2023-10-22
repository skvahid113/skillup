import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqlComponent } from './dql.component';

describe('DqlComponent', () => {
  let component: DqlComponent;
  let fixture: ComponentFixture<DqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DqlComponent]
    });
    fixture = TestBed.createComponent(DqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
