import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlogoutComponentComponent } from './loginlogout-component.component';

describe('LoginlogoutComponentComponent', () => {
  let component: LoginlogoutComponentComponent;
  let fixture: ComponentFixture<LoginlogoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginlogoutComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlogoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
