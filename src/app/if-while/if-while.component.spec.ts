import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfWhileComponent } from './if-while.component';

describe('IfWhileComponent', () => {
  let component: IfWhileComponent;
  let fixture: ComponentFixture<IfWhileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfWhileComponent]
    });
    fixture = TestBed.createComponent(IfWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
