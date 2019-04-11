import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerProfileLayoutComponent } from './worker-profile-layout.component';

describe('WorkerProfileLayoutComponent', () => {
  let component: WorkerProfileLayoutComponent;
  let fixture: ComponentFixture<WorkerProfileLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerProfileLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
