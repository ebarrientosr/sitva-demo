/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisorAsistenciaVotacionComponent } from './visor-asistencia-votacion.component';

describe('VisorAsistenciaVotacionComponent', () => {
  let component: VisorAsistenciaVotacionComponent;
  let fixture: ComponentFixture<VisorAsistenciaVotacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorAsistenciaVotacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorAsistenciaVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
