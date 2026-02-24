import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USERNAME = 'admin';
  private readonly PASSWORD = 'admin123';

  login(username: string, password: string): boolean {
    if (username === this.USERNAME && password === this.PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }
}