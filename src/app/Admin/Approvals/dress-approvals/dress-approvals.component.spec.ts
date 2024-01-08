import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressApprovalsComponent } from './dress-approvals.component';

describe('DressApprovalsComponent', () => {
  let component: DressApprovalsComponent;
  let fixture: ComponentFixture<DressApprovalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DressApprovalsComponent]
    });
    fixture = TestBed.createComponent(DressApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
