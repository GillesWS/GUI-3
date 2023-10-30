import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-lijsten-component',
  templateUrl: './lijsten-component.component.html',
  styleUrls: ['./lijsten-component.component.css']
})
export class LijstenComponentComponent implements OnInit,OnDestroy {

  lijstSubscription!: Subscription;
  lijsten : lijsten[] = [];
  status: any;
  constructor(private ss: ServersService,private route: ActivatedRoute,private router: Router) {
    this.ss.subjectStatus$.subscribe(x=>console.log("subject from lijsten: " + x));
    this.ss.subjectStatus$.next(25);
    setTimeout(()=>{
      this.ss.subjectStatus$.next(75);
    },2000)
    setTimeout(()=>{
      this.ss.subjectStatus$.next(175);
    },4000)
  }
  

  ngOnInit(): void{
    this.lijsten = [];
    //this.onGetServer();
    this.onGetLijsten();
  }
  onGetLijsten() {
    this.lijstSubscription = this.ss.getLijsten()
      .subscribe(lijsten => {
        console.log(lijsten);
        this.lijsten = lijsten;
      })
  }
  
  ngOnDestroy(): void {
    if(this.lijstSubscription){
      this.lijstSubscription.unsubscribe();
    }
  }

  deleteLijst(val: any){
    if (confirm("Are you sure you want to delete? ")){
    this.ss.deleteLijst(val);
    this.router.navigate(['/lijstenComponent']);
    }
  }
  

  /*onGetServer(): void{
    this.ss.getLijsten().subscribe(
      (response: lijsten[])=>{
        console.log('received lijsten: ',response)
        this.lijsten = response;
      },
      (error) => console.log('error: ',error),
        () => console.log('ready!')
      );
  }*/
  /*
  deleteLijst(val: any){
    if (confirm("Are you sure you want to delete? ")){
    this.ss.deleteLijst(val).subscribe(
      data => {});
    this.ss.deleteLijst(val).subscribe((response) => {
      
    });
  }
  
  }*/

  
}
