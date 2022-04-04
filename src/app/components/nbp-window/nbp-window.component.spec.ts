import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbpWindowComponent } from './nbp-window.component';

describe('NbpWindowComponent', () => {
  let component: NbpWindowComponent;
  let fixture: ComponentFixture<NbpWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbpWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbpWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
