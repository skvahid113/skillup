import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatementComponent } from './case-statement.component';

describe('CaseStatementComponent', () => {
  let component: CaseStatementComponent;
  let fixture: ComponentFixture<CaseStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStatementComponent]
    });
    fixture = TestBed.createComponent(CaseStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
