/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MesaDirectivaComponent } from './mesa-directiva.component';

describe('MesaDirectivaComponent', () => {
  let component: MesaDirectivaComponent;
  let fixture: ComponentFixture<MesaDirectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaDirectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
