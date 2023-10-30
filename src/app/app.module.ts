import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LijstenComponentComponent } from './lijsten-component/lijsten-component.component';
import { ToevoegenComponentComponent } from './toevoegen-component/toevoegen-component.component';
import { AanpassenComponentComponent } from './aanpassen-component/aanpassen-component.component';
import { VerwijderenComponentComponent } from './verwijderen-component/verwijderen-component.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { EditServerComponentComponent } from './edit-server-component/edit-server-component.component';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginlogoutComponentComponent } from './loginlogout-component/loginlogout-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AuthGuard } from './auth/auth.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './auth/admin.guard';
import { HighlightDirective } from './highlight.directive';
import { AuthModule } from './auth/auth.module';
import { provideStorage, getStorage } from '@angular/fire/storage';

const routes: Routes = [
  { path: 'footerComponent', component: FooterComponentComponent },
  { path: 'headerComponent', component: HeaderComponentComponent },
  { path: 'homeComponent', component: HomeComponentComponent },
  { path: 'lijstenComponent', component: LijstenComponentComponent, canActivate: [AuthGuard]},
  { path: 'toevoegenComponent', component: ToevoegenComponentComponent, canActivate: [AuthGuard] },
  { path: 'aanpassenComponent', component: AanpassenComponentComponent, canActivate: [AuthGuard] },
  { path: 'verwijderenComponent', component: VerwijderenComponentComponent, canActivate: [AuthGuard] },
  { path: 'editServerComponent/:id', component: EditServerComponentComponent, canActivate: [AuthGuard] },
  { path: 'loginlogoutComponent', component: LoginlogoutComponentComponent },
  { path: 'registerComponent', component: RegisterComponentComponent },
  { path: 'signupComponent', component: SignupComponent},
  { path: 'loginComponent', component: LoginComponent},
  { path: 'adminPageComponent', component: AdminPageComponent,canActivate: [AdminGuard,AuthGuard]},
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() =>getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    LijstenComponentComponent,
    ToevoegenComponentComponent,
    AanpassenComponentComponent,
    VerwijderenComponentComponent,
    EditServerComponentComponent,
    LoginlogoutComponentComponent,
    RegisterComponentComponent,
    LoginComponent,
    SignupComponent,
    AdminPageComponent,
    HighlightDirective,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }


