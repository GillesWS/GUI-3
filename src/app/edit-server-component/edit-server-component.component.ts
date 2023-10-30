import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LijstenComponentComponent } from '../lijsten-component/lijsten-component.component';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../auth/auth.guard';

@Component({
  selector: 'app-edit-server-component',
  templateUrl: './edit-server-component.component.html',
  styleUrls: ['./edit-server-component.component.css']
})
export class EditServerComponentComponent implements OnInit, CanComponentDeactivate {

  lijsten!: lijsten;
  val: any;
  @ViewChild('userForm') form!: NgForm;
  id! : any
  lijstnaam!: any;
  lijstkleur!: any;
  omschrijving!: any;
  saved!: boolean;

  

  constructor(private ss: ServersService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.saved = false;
  }

  updateLijst(){
    this.ss.updateLijst(this.form.value,this.route.snapshot.params['id']);
    //console.log(this.route.snapshot.params['id']);
    this.router.navigate(['/lijstenComponent']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.saved === false) {
      return confirm('Do you want to discard the changes made?');
    }
    return true;
 }

}
