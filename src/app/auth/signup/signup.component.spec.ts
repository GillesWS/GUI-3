import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('invalidForm should be true', () => {
    expect(component.invalidForm).toBeTrue();
  });

  it('invalidForm should be false', () => {
    expect(component.invalidForm).toBeFalse();
  });

  it('button has been pressed', () => {
    expect(component.buttonIsPressed).toBeTrue();
  });

  it('button has not been pressed', () => {
    expect(component.buttonIsPressed).toBeFalse();
  })

});
