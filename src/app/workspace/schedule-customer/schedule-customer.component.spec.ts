import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCustomerComponent } from './schedule-customer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ScheduleCustomerComponent', () => {
  let component: ScheduleCustomerComponent;
  let fixture: ComponentFixture<ScheduleCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule],
      declarations: [ ScheduleCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
