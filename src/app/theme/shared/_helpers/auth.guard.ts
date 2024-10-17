// angular import
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

// project import
import { SessionService } from '../service/global/session.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  // constructor
  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  // public method
  canActivate() {
    if (this.sessionService.isAuth()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    
    this.router.navigate(['/auth/login/2']);
    // this.router.navigate(['/auth/login'], { queryParams: { tipe: 2 } });
    return false;
  }
}
