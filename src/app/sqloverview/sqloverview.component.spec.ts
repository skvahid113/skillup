import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqloverviewComponent } from './sqloverview.component';

describe('SqloverviewComponent', () => {
  let component: SqloverviewComponent;
  let fixture: ComponentFixture<SqloverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqloverviewComponent]
    });
    fixture = TestBed.createComponent(SqloverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
