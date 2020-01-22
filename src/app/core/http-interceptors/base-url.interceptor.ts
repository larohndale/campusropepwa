import { Injectable, Inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(@Inject('BASE_API_URL') private baseUrl: string) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('api')) {
      // the word api is removed from the request url to point to cms
      const finalUrl = `${this.baseUrl}/${request.url.substring(4)}`;
      const apiReq = request.clone({ url: finalUrl });
      return next.handle(apiReq);
    }
    if (request.url.includes('unauth')) {
      // the word unauth is removed from the request url to point to cms
      const finalUrl = `${this.baseUrl}/${request.url.substring(7)}`;
      const apiReq = request.clone({ url: finalUrl });
      return next.handle(apiReq);
    }
    return next.handle(request.clone());
  }
}
