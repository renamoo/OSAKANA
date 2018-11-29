import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanabiComponent } from './hanabi.component';

describe('HanabiComponent', () => {
  let component: HanabiComponent;
  let fixture: ComponentFixture<HanabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
