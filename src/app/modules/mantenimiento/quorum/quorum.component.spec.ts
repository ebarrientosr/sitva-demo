/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuorumComponent } from './quorum.component';

describe('QuorumComponent', () => {
  let component: QuorumComponent;
  let fixture: ComponentFixture<QuorumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuorumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuorumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
