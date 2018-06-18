import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCleanerComponent } from './profile-cleaner.component';

describe('ProfileCleanerComponent', () => {
  let component: ProfileCleanerComponent;
  let fixture: ComponentFixture<ProfileCleanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCleanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
