import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoadingService} from "../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.loadingService.disableLoadingOnNextAjax.value) {
      this.loadingService.isLoading.next(true);
    } else {
      this.loadingService.disableLoadingOnNextAjax.next(false);
    }
    return next.handle(request).pipe(finalize(() => this.loadingService.isLoading.next(false)));
  }
}
