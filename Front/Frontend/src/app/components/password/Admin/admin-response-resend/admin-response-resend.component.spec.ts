import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResponseResendComponent } from './admin-response-resend.component';

describe('AdminResponseResendComponent', () => {
  let component: AdminResponseResendComponent;
  let fixture: ComponentFixture<AdminResponseResendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResponseResendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResponseResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
