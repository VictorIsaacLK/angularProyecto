import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, retry, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  login(user: User) {
    return this.http
      .post<User>('http://127.0.0.1:3333/login', user)
      .pipe(retry(3), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Ha ocurrido un error:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(() => new Error('Vuelva a intentar más tarde.'));
  }
  
  info(id: number)
  {
    return this.http.get<User>('http://127.0.0.1:3333/user' + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

}
