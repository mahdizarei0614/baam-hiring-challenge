import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/assets/') && environment.githubDeploy) {
      const apiReq = req.clone({url: 'baam-hiring-challenge' + req.url});
      const apiReq2 = apiReq.clone({url: req.url.replace('baam-hiring-challenge/baam-hiring-challenge', 'baam-hiring-challenge')});
      return next.handle(apiReq2);
    }
    const apiReq = req.clone({url: environment.apiUrl + req.url});
    return next.handle(apiReq);
  }
}
