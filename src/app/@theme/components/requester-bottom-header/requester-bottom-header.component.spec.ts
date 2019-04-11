import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterBottomHeaderComponent } from './requester-bottom-header.component';

describe('RequesterBottomHeaderComponent', () => {
  let component: RequesterBottomHeaderComponent;
  let fixture: ComponentFixture<RequesterBottomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesterBottomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterBottomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
