import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers.set('Access-Control-Allow-Origin', '*')
                               .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
                               .set('Access-Control-Allow-Headers', 'Content-Type');

    const newReq = req.clone({ headers });
  
    return next.handle(newReq);
  }
}
