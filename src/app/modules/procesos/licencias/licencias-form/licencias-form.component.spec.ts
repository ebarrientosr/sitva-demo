import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciasFormComponent } from './licencias-form.component';

describe('LicenciasFormComponent', () => {
  let component: LicenciasFormComponent;
  let fixture: ComponentFixture<LicenciasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
