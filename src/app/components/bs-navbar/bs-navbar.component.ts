import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})

export class BsNavbarComponent {
  user$: Observable<firebase.User | any>;

  constructor(private auth: AngularFireAuth) {
    this.user$ = auth.authState;
   }

  logout() {
    this.auth.signOut();
  }
}
