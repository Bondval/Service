import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerProfileComponent } from './cleaner-profile.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('CleanerProfileComponent', () => {
  let component: CleanerProfileComponent;
  let fixture: ComponentFixture<CleanerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ CleanerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
