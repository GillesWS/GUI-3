import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verwijderen-component',
  templateUrl: './verwijderen-component.component.html',
  styleUrls: ['./verwijderen-component.component.css']
})
export class VerwijderenComponentComponent implements OnInit {

  lijsten : lijsten[] = [];
  lijst!: lijsten;
  val: any;
  @ViewChild('userForm') form!: NgForm;
  lijstnaamText!: any;
  favcolor!: any;
  omschrijvingText!: any;

  constructor(private ss: ServersService,private router: Router) {}

  ngOnInit(): void{
    this.onGetServer();
  }

  deleteLijst(val: any){
    if (confirm("Are you sure you want to delete? ")){
    this.ss.deleteLijst(val);
    this.router.navigate(['/verwijderenComponent']);
    }
  }

  onGetServer(): void{
    this.ss.getLijsten().subscribe(
      (response: lijsten[])=>{
        console.log('received lijsten: ',response)
        this.lijsten = response;
      },
      (error) => console.log('error: ',error),
        () => console.log('ready!')
      );
  }
}
