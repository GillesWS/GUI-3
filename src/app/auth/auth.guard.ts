import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditServerComponentComponent } from '../edit-server-component/edit-server-component.component';
import { AuthService } from './auth.service';


export interface CanComponentDeactivate{
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate, CanDeactivate<CanComponentDeactivate>{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/loginComponent']);
      return false;
    }
  }
  canDeactivate(
    component: EditServerComponentComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextStage?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean 
  {
    return component.canDeactivate();
  }
  
}
