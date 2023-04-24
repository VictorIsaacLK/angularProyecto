import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import Swal from 'sweetalert2';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../servicios/auth.service';
import { GlobalVariablesService } from '../servicios/global-variables.service';

@Injectable({
  providedIn: 'root',
})
export class StatusGuard implements CanActivate {
  constructor(
    private http: HttpClient,
    private router: Router,
    private variables: GlobalVariablesService,
    
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http
      .get<User>(this.variables.apiUrl + '/status', { headers })
      .pipe(
        map((user) => {
          if (user.status == 1) {
            return true;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Tu cuenta no esta activa, por favor contacta al administrador',
              showConfirmButton: false,
              timer: 3000
            });
          setTimeout(() => {
              this.router.navigate(['/login']);
          }, 3000);
            localStorage.removeItem('token');
           return false;
          }
        })
      );
  }
}
