import { Component } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})

export class BsNavbarComponent {

  user!: AppUser | null;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.user = appUser);
   }

  logout() {
    this.auth.logout();
  }
}
