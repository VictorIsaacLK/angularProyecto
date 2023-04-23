import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: AuthService, private router: Router) { }

  canActivate(): Promise<boolean> {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (!token) {
      this.router.navigate(['/login']);
      return Promise.resolve(false);
    }
    return this.apiService.verifyToken(token).toPromise().then((response) => {
      if (response) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
  
}

