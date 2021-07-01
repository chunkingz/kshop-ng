import { Component } from '@angular/core';
import { IAppUser } from 'src/app/models/iAppUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})

export class BsNavbarComponent {

  user!: IAppUser | null;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.user = appUser);
   }

  logout() {
    this.auth.logout();
  }
}
