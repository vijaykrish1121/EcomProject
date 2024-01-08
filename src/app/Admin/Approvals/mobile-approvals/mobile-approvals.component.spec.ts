import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApprovalsComponent } from './mobile-approvals.component';

describe('MobileApprovalsComponent', () => {
  let component: MobileApprovalsComponent;
  let fixture: ComponentFixture<MobileApprovalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileApprovalsComponent]
    });
    fixture = TestBed.createComponent(MobileApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
