import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStageComponent } from './icon-stage.component';

describe('IconStageComponent', () => {
  let component: IconStageComponent;
  let fixture: ComponentFixture<IconStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
