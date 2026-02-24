import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true'
        || (window.location.href = 'http://localhost:4201', false);
}
}