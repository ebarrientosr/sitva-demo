import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciasListComponent } from './licencias-list.component';

describe('LicenciasListComponent', () => {
  let component: LicenciasListComponent;
  let fixture: ComponentFixture<LicenciasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
