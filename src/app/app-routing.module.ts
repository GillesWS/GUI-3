import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LijstenComponentComponent } from './lijsten-component/lijsten-component.component';
import { ToevoegenComponentComponent } from './toevoegen-component/toevoegen-component.component'
import { VerwijderenComponentComponent } from './verwijderen-component/verwijderen-component.component'
import { AanpassenComponentComponent } from './aanpassen-component/aanpassen-component.component'
import { EditServerComponentComponent } from './edit-server-component/edit-server-component.component';
import { LoginlogoutComponentComponent } from './loginlogout-component/loginlogout-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  
  { path: 'footerComponent', component: FooterComponentComponent },
  { path: 'headerComponent', component: HeaderComponentComponent },
  { path: 'homeComponent', component: HomeComponentComponent },
  { path: 'lijstenComponent', component: LijstenComponentComponent, canActivate: [AuthGuard]},
  { path: 'toevoegenComponent', component: ToevoegenComponentComponent },
  { path: 'aanpassenComponent', component: AanpassenComponentComponent, canDeactivate: [AuthGuard] },
  { path: 'verwijderenComponent', component: VerwijderenComponentComponent },
  { path: 'editServerComponent/:id', component: EditServerComponentComponent, canDeactivate: [AuthGuard] },
  { path: 'loginlogoutComponent', component: LoginlogoutComponentComponent },
  { path: 'registerComponent', component: RegisterComponentComponent },
  {path:'',redirectTo:'homeComponent', component: HomeComponentComponent, pathMatch: 'full' },
  
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
