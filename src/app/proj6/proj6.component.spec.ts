import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj6Component } from './proj6.component';

describe('Proj6Component', () => {
  let component: Proj6Component;
  let fixture: ComponentFixture<Proj6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proj6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
