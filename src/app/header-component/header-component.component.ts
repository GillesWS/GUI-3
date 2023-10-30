import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AdminGuard } from '../auth/admin.guard';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private _authService: AuthService, private _adminguard: AdminGuard) { }

  onLogout(): void {
    this._authService.logout();
  }

  get authService(){
    return this._authService;
  }

  ngOnInit(): void {
  }

  get adminguard(){
    return this._adminguard;
  }
 
}
