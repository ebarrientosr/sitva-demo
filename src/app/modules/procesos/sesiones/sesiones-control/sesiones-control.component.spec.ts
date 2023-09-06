import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesControlComponent } from './sesiones-control.component';

describe('SesionesControlComponent', () => {
  let component: SesionesControlComponent;
  let fixture: ComponentFixture<SesionesControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
