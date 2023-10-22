import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinedFunctionsComponent } from './user-defined-functions.component';

describe('UserDefinedFunctionsComponent', () => {
  let component: UserDefinedFunctionsComponent;
  let fixture: ComponentFixture<UserDefinedFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDefinedFunctionsComponent]
    });
    fixture = TestBed.createComponent(UserDefinedFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
