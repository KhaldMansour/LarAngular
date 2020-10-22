import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestResendComponent } from './admin-request-resend.component';

describe('AdminRequestResendComponent', () => {
  let component: AdminRequestResendComponent;
  let fixture: ComponentFixture<AdminRequestResendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequestResendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
