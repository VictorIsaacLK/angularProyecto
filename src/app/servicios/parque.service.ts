import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parque } from '../interfaces/parque.interface';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { GlobalVariablesService } from './global-variables.service';

@Injectable({
  providedIn: 'root',
})
export class ParqueService {
  message: string = '';

  constructor(private http: HttpClient, private globalVariables : GlobalVariablesService) {}

  getParques(): Observable<Parque[]> {
    return this.http.get<Parque[]>(this.globalVariables.apiUrl + '/parques').pipe(
      catchError((error) => {
        this.message = 'Ocurrio un error';
        return throwError(error);
      })
    );
  }
  getParque(id:number): Observable<Parque> {
    return this.http.get<Parque>(this.globalVariables.apiUrl + `/parque/${id}`).pipe(
      catchError((error) => {
        this.message = 'Ocurrio un error';
        return throwError(error);
      }
    ));

}
updateParque(parque: Parque, id :number): Observable<Parque> {
  return this.http.put<Parque>(this.globalVariables.apiUrl + `/parque/update/`+ id, parque)
  .pipe(
    catchError(error => {
      this.message='Ocurrio un error';
      return throwError(error)
    }));

}

deteleParque(id: number): Observable<Parque> {
  return this.http.delete<Parque>(this.globalVariables.apiUrl + `/parque/delete/`+ id)
  .pipe(
    catchError(error => {
      this.message='Ocurrio un error';
      return throwError(error)
    }));
}
}

