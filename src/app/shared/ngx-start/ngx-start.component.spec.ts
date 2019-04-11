import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStartComponent } from './ngx-start.component';

describe('NgxStartComponent', () => {
  let component: NgxStartComponent;
  let fixture: ComponentFixture<NgxStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
