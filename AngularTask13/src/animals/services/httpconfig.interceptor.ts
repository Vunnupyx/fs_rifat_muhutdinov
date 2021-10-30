import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) return
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            alert(error.message)
          }
        }
      ));
  }
}
