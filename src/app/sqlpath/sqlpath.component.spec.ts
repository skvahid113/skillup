import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlpathComponent } from './sqlpath.component';

describe('SqlpathComponent', () => {
  let component: SqlpathComponent;
  let fixture: ComponentFixture<SqlpathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlpathComponent]
    });
    fixture = TestBed.createComponent(SqlpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
