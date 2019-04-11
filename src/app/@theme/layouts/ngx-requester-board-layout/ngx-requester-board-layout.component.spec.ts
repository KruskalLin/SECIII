import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRequesterBoardLayoutComponent } from './ngx-requester-board-layout.component';

describe('NgxRequesterBoardLayoutComponent', () => {
  let component: NgxRequesterBoardLayoutComponent;
  let fixture: ComponentFixture<NgxRequesterBoardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRequesterBoardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRequesterBoardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
