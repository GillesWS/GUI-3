import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServerComponentComponent } from './edit-server-component.component';

describe('EditServerComponentComponent', () => {
  let component: EditServerComponentComponent;
  let fixture: ComponentFixture<EditServerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
