import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterProfileLayoutComponent } from './requester-profile-layout.component';

describe('RequesterProfileLayoutComponent', () => {
  let component: RequesterProfileLayoutComponent;
  let fixture: ComponentFixture<RequesterProfileLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesterProfileLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
