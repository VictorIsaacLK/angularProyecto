import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  constructor() { }


  apiUrl = 'http://127.0.0.1:3333';
}
