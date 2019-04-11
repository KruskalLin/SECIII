import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWorkerBoardLayoutComponent } from './ngx-worker-board-layout.component';

describe('NgxWorkerBoardLayoutComponent', () => {
  let component: NgxWorkerBoardLayoutComponent;
  let fixture: ComponentFixture<NgxWorkerBoardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWorkerBoardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWorkerBoardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
