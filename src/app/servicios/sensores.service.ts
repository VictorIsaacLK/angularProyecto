import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariablesService } from './global-variables.service';
import { catchError, Observable, retry, throwError } from 'rxjs';import { Sensor } from '../interfaces/sensor';
import { Rueda } from '../interfaces/rueda.interface';

@Injectable({
  providedIn: 'root'
})
export class SensoresService {
  message: string = '';

  constructor(private http:HttpClient, private globalVariables : GlobalVariablesService) { }

  getSensores(): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(this.globalVariables.apiUrl + '/sensores').pipe(
      catchError((error) => {
        this.message = 'Ocurrio un error';
        return throwError(error);
      })
    );
  }

  updateRueda(): Observable<Rueda[]>{
    return this.http.get<Rueda[]>(this.globalVariables.apiUrl + '/sensores').pipe(
      catchError((error) => {
        this.message = 'Ocurrio un error';
        return throwError(error);
      })
    );
  }
  
 
}
  

