import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterTopHeaderComponent } from './requester-top-header.component';

describe('RequesterTopHeaderComponent', () => {
  let component: RequesterTopHeaderComponent;
  let fixture: ComponentFixture<RequesterTopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesterTopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
