/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VotosOralesComponent } from './votos-orales.component';

describe('VotosOralesComponent', () => {
  let component: VotosOralesComponent;
  let fixture: ComponentFixture<VotosOralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotosOralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosOralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
