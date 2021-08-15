import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAppUser } from 'src/app/models/iAppUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user!: IAppUser | null;

  constructor(private auth: AuthService, private router: Router) {
    // Important to check if the user is logged in here so that we can redirect the user to the desired page.
    // This is due to an issue with using Angular fire signInWithRedirect.
    // getRedirectResult doesnt work as expected here, only when used in the auth service.
    // But since the page redirects back here /login after the user is authenticated which causes an unexpected 404 error
    // Therefore, we need the logic to happen here on component init.

    this.auth.appUser$.subscribe(appUser => {
      this.user = appUser;
      if(appUser){
        this.router.navigate(['/']);
      }
    });

  }

  login() {
    this.auth.login();
  }

}
