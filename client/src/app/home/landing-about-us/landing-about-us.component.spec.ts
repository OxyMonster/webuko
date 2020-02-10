import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAboutUsComponent } from './landing-about-us.component';

describe('LandingAboutUsComponent', () => {
  let component: LandingAboutUsComponent;
  let fixture: ComponentFixture<LandingAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
