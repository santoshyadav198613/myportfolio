import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventContainer } from './event.container';

describe('EventContainer', () => {
  let component: EventContainer;
  let fixture: ComponentFixture<EventContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
