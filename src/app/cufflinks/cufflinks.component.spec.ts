import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CufflinksComponent } from './cufflinks.component';

describe('CufflinksComponent', () => {
  let component: CufflinksComponent;
  let fixture: ComponentFixture<CufflinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CufflinksComponent]
    });
    fixture = TestBed.createComponent(CufflinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
