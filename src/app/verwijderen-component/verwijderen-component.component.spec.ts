import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwijderenComponentComponent } from './verwijderen-component.component';

describe('VerwijderenComponentComponent', () => {
  let component: VerwijderenComponentComponent;
  let fixture: ComponentFixture<VerwijderenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerwijderenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerwijderenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
