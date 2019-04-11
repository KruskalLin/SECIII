import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerBottomHeaderComponent } from './worker-bottom-header.component';

describe('WorkerBottomHeaderComponent', () => {
  let component: WorkerBottomHeaderComponent;
  let fixture: ComponentFixture<WorkerBottomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerBottomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerBottomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
