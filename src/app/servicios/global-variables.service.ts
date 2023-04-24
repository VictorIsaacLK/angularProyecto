import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  constructor() { }

  apiUrl = 'https://adonis.treevyda.lat';
}
