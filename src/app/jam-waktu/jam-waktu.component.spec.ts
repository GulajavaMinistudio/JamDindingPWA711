import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamWaktuComponent } from './jam-waktu.component';

describe('JamWaktuComponent', () => {
  let component: JamWaktuComponent;
  let fixture: ComponentFixture<JamWaktuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamWaktuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamWaktuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
