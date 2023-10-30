import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent{
reactiveForm!: FormGroup;
constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
        email: new FormControl(null, [Validators.required, this.emailExists.bind(this)]),
        wachtwoord: new FormControl(null, [Validators.required,Validators.minLength(6)]),
    });
    
  }

  onSignup(){
    this.authService.signup(this.reactiveForm.value.email, this.reactiveForm.value.wachtwoord)
    .then((response) => {
      if(response == 'success'){
        this.router.navigate(['/loginComponent']);
        console.log('Successfully signed up');
      }
      else{
        alert(response);
        console.log('Failed signing up');
      }
    }) 
  }

  emailExists(control: FormControl): Promise<any> | Observable<any>{
    const answer = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'r0902507@student.thomasmore.be'){
          resolve({'emailTaken':true});
          
        }else{
          resolve(null);
        }
      },1500);
    });
    return answer;
  }

  onSubmit(): void{
    console.log(this.reactiveForm);
  }

  buttonIsPressed(){
    return true;
  }

  invalidForm(){
    return true;
  }

  
 

  /*onSignup(form: NgForm){
    const email = form.value.email;
    const wachtwoord = form.value.wachtwoord;
    this.authService.signup(email, wachtwoord)
    .then((response) => {
      if(response == 'success'){
        this.router.navigate(['/loginComponent']);
        console.log('Successfully signed up');
      }
      else{
        alert(response);
        console.log('Failed signing up');
      }
    })
  }*/

 /* onSubmit(): void{
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
*/

}

