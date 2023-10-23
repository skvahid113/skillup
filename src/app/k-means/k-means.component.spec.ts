import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMeansComponent } from './k-means.component';

describe('KMeansComponent', () => {
  let component: KMeansComponent;
  let fixture: ComponentFixture<KMeansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KMeansComponent]
    });
    fixture = TestBed.createComponent(KMeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
