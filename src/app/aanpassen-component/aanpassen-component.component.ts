import { Component, OnInit, ViewChild } from '@angular/core';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aanpassen-component',
  templateUrl: './aanpassen-component.component.html',
  styleUrls: ['./aanpassen-component.component.css']
})
export class AanpassenComponentComponent implements OnInit {

  lijsten: lijsten[] = [];
  lijst!: lijsten;
  val: any;
  @ViewChild('userFormEdit') form!: NgForm;
  lijstnaamText!: any;
  favcolor!: any;
  omschrijvingText!: any;
  saved!: boolean;

  constructor(private ss: ServersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.onGetServer();
    this.saved = false;
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

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.saved === false) {
      return confirm('Do you want to exit without saving?');
    }
    return true;
  } 

}
