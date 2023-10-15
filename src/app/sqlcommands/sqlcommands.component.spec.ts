import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlcommandsComponent } from './sqlcommands.component';

describe('SqlcommandsComponent', () => {
  let component: SqlcommandsComponent;
  let fixture: ComponentFixture<SqlcommandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlcommandsComponent]
    });
    fixture = TestBed.createComponent(SqlcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
