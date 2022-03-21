import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanActivate {
  constructor(private route: Router) {}
  canActivate() {
    if (sessionStorage.getItem('userData')) {
      return true;
    } else {
      return false;
    }
  }
}
