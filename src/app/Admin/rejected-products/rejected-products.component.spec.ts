import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedProductsComponent } from './rejected-products.component';

describe('RejectedProductsComponent', () => {
  let component: RejectedProductsComponent;
  let fixture: ComponentFixture<RejectedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedProductsComponent]
    });
    fixture = TestBed.createComponent(RejectedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
