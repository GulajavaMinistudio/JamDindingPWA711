import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamWaktuViewComponent } from './jam-waktu-view.component';

describe('JamWaktuViewComponent', () => {
  let component: JamWaktuViewComponent;
  let fixture: ComponentFixture<JamWaktuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamWaktuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamWaktuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
