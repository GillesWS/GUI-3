import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AanpassenComponentComponent } from './aanpassen-component.component';

describe('AanpassenComponentComponent', () => {
  let component: AanpassenComponentComponent;
  let fixture: ComponentFixture<AanpassenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AanpassenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AanpassenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
