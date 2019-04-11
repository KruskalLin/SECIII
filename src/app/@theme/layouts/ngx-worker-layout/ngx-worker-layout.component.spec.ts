import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWorkerLayoutComponent } from './ngx-worker-layout.component';

describe('NgxWorkerLayoutComponent', () => {
  let component: NgxWorkerLayoutComponent;
  let fixture: ComponentFixture<NgxWorkerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWorkerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWorkerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
