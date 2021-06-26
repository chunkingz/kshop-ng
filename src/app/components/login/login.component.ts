import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AngularFireAuth) {}

  login() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
