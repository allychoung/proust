import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj7Component } from './proj7.component';

describe('Proj7Component', () => {
  let component: Proj7Component;
  let fixture: ComponentFixture<Proj7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proj7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
