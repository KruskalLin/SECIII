import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {RequesterAuthService} from "./requester-auth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('user'));
      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            token: `${currentUser.token}`,
          },
        });
      }

      return next.handle(request);

  }
}
