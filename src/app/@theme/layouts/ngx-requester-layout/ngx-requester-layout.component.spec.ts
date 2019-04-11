import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRequesterLayoutComponent } from './ngx-requester-layout.component';

describe('NgxRequesterLayoutComponent', () => {
  let component: NgxRequesterLayoutComponent;
  let fixture: ComponentFixture<NgxRequesterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRequesterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRequesterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
