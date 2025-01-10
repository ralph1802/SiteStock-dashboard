import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private mockUsers = [
    { email: 'rleos@outlook.com', password: '123456' },
  ];

  login(email: string, password: string): Observable<any> {
    const user = this.mockUsers.find((u) => u.email === email && u.password === password);
    if (user) {
      const token = 'mock-jwt-token';
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('authToken', token);
      }
      return of({ success: true, token }).pipe(delay(1000));
    } else {
      return throwError(() => new Error('Invalid email or password')).pipe(delay(1000));
    }
  }

  loginWithGoogle(): Observable<any> {
    const token = 'mock-google-token';
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('authToken', token);
    }
    return of({ success: true, token }).pipe(delay(1000));
  }

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('authToken');
    }
  }
}
