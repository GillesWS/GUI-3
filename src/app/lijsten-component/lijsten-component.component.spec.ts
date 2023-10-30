import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijstenComponentComponent } from './lijsten-component.component';

describe('LijstenComponentComponent', () => {
  let component: LijstenComponentComponent;
  let fixture: ComponentFixture<LijstenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LijstenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LijstenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
