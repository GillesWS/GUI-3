import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  form!: FormGroup;
    
  constructor() { }

  ngOnInit(): void{
    this.form = new FormGroup({
      
        email: new FormControl(null, [Validators.required, this.validateEmail]),
        wachtwoord: new FormControl(null, Validators.required),
        herhaalwachtwoord: new FormControl(null, Validators.required),   
         
    });
  }

  onSubmit(): void{
    console.log(this.form);
    
  }
  
  get email(){
    return this.form.get('email')
    }

    get wachtwoord(){
      return this.form.get('wachtwoord')
      }

      get herhaalwachtwoord(){
        return this.form.get('herhaalwachtwoord')
        }
  
    validateEmail(c: FormControl) {
      let EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
    
      return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
          valid: false
        }
      };
    }


}
