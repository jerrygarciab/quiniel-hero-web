import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallPointsComponent } from './overallpoints.component';

describe('OverallPointsComponent', () => {
  let component: OverallPointsComponent;
  let fixture: ComponentFixture<OverallPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
