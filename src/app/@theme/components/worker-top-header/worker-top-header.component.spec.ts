import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTopHeaderComponent } from './worker-top-header.component';

describe('WorkerTopHeaderComponent', () => {
  let component: WorkerTopHeaderComponent;
  let fixture: ComponentFixture<WorkerTopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerTopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
