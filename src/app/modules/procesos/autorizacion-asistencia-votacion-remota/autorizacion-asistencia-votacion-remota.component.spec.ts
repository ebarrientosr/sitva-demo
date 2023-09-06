/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutorizacionAsistenciaVotacionRemotaComponent } from './autorizacion-asistencia-votacion-remota.component';

describe('AutorizacionAsistenciaVotacionRemotaComponent', () => {
  let component: AutorizacionAsistenciaVotacionRemotaComponent;
  let fixture: ComponentFixture<AutorizacionAsistenciaVotacionRemotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizacionAsistenciaVotacionRemotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacionAsistenciaVotacionRemotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
