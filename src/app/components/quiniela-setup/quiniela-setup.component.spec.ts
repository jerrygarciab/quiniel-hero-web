import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinielaSetupComponent } from './quiniela-setup.component';

describe('QuinielaSetupComponent', () => {
  let component: QuinielaSetupComponent;
  let fixture: ComponentFixture<QuinielaSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinielaSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinielaSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
