import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlPageComponent } from './dl-page.component';

describe('DlPageComponent', () => {
  let component: DlPageComponent;
  let fixture: ComponentFixture<DlPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
