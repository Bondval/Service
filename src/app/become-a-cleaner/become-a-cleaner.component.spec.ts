import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeACleanerComponent } from './become-a-cleaner.component';

describe('BecomeACleanerComponent', () => {
  let component: BecomeACleanerComponent;
  let fixture: ComponentFixture<BecomeACleanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeACleanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeACleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
