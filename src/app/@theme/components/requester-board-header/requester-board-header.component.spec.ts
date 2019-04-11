import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterBoardHeaderComponent } from './requester-board-header.component';

describe('RequesterBoardHeaderComponent', () => {
  let component: RequesterBoardHeaderComponent;
  let fixture: ComponentFixture<RequesterBoardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesterBoardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterBoardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
