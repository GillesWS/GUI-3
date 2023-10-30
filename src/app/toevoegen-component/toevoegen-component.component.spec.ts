import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToevoegenComponentComponent } from './toevoegen-component.component';

describe('ToevoegenComponentComponent', () => {
  let component: ToevoegenComponentComponent;
  let fixture: ComponentFixture<ToevoegenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToevoegenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToevoegenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
