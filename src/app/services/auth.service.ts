import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  public googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
        this.authState = credential.user
        this.router.navigate(['/'])
      })
      .catch(error => console.log(error));
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
}
