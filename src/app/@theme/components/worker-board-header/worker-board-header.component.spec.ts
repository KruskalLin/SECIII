import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerBoardHeaderComponent } from './worker-board-header.component';

describe('WorkerBoardHeaderComponent', () => {
  let component: WorkerBoardHeaderComponent;
  let fixture: ComponentFixture<WorkerBoardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerBoardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerBoardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
