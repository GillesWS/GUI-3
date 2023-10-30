import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { AuthService } from './auth.service';
import { admin } from './admin'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private ss: ServersService, private authService:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.ss.getAdmin(this.authService.getUid())
      .pipe(map(
        (Admin: admin) => {
          if (Admin){
            return true;
          }
          else{
            return false;
          }
        }
      ));
  }
    
}
