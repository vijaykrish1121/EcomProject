import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppravolComponent } from './appravol.component';

describe('AppravolComponent', () => {
  let component: AppravolComponent;
  let fixture: ComponentFixture<AppravolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppravolComponent]
    });
    fixture = TestBed.createComponent(AppravolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
