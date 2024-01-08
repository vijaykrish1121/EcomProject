import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDressproductComponent } from './view-dressproduct.component';

describe('ViewDressproductComponent', () => {
  let component: ViewDressproductComponent;
  let fixture: ComponentFixture<ViewDressproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDressproductComponent]
    });
    fixture = TestBed.createComponent(ViewDressproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
