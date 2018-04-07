import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { LoginComponent } from './components/login/login.component';
import { AuthService } from "./services/auth.service";
import { MainComponent } from './components/main/main.component';
import {ContactService} from "./services/contact.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'NetworkBook'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'login', component: LoginComponent },
    ])
],
  providers: [
    AuthService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
