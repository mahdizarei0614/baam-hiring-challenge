import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Md5} from "md5-typescript";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timestamp = String(Number(Date.now()));
    const apiReq = req.clone({
      params: req.params.set('ts', timestamp)
        .set('apikey', environment.apiPublicKey)
        .set('hash', Md5.init(timestamp + environment.apiPrivateKey + environment.apiPublicKey))
    });
    return next.handle(apiReq);
  }
}
