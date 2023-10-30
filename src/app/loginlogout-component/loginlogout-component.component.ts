import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginlogout-component',
  templateUrl: './loginlogout-component.component.html',
  styleUrls: ['./loginlogout-component.component.css']
})
export class LoginlogoutComponentComponent implements OnInit {

  validUsernameFormat = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;

  constructor() { }

  ngOnInit(): void {
    
  }
/*
  validNames(control:FormControl): {[s:string]:boolean} {
    if(!this.validUsernameFormat.test(control.value)){
      return {'invalidFormat':true};
    }
    return null;
  }
*/
}
