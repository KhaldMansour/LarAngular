import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResendComponent } from './request-resend.component';

describe('RequestResendComponent', () => {
  let component: RequestResendComponent;
  let fixture: ComponentFixture<RequestResendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestResendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
