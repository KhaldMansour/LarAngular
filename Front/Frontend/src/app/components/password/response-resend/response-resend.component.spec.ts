import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseResendComponent } from './response-resend.component';

describe('ResponseResendComponent', () => {
  let component: ResponseResendComponent;
  let fixture: ComponentFixture<ResponseResendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseResendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
