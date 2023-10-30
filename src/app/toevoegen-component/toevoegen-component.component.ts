import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ServersService } from '../servers.service';
import { lijsten } from '../lijsten';
import { NgForm, NgModelGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toevoegen-component',
  templateUrl: './toevoegen-component.component.html',
  styleUrls: ['./toevoegen-component.component.css']
})
export class ToevoegenComponentComponent implements OnInit {

  lijsten : lijsten[] = [];
  @ViewChild('userForm') form!: NgForm;
  lijstnaamText!: any;
  favcolor!: any;
  omschrijvingText!: any;

  constructor(private ServersService: ServersService,private router: Router) { }

  ngOnInit(): void {
  }

  /*onGetServer(): void{
    this.ServersService.getLijsten().subscribe(
      (response: lijsten[])=>{
        console.log('received lijsten: ',response)
        this.lijsten = response;
      },
      (error) => console.log('error: ',error),
        () => console.log('ready!')
      );
  }*/

  onAddLijst(): void{
  const newLijst = {...this.form.value} as lijsten;
  this.ServersService.createLijst(newLijst)
    .subscribe(
      ((lijsten) => {
        this.router.navigate(['/lijstenComponent']);
      })
    )
}
}
