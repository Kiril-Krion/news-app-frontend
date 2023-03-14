import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AppStateService } from 'src/core/app-state.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private stateService: AppStateService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      let authReq = req;
      const token = this.stateService.token;
      if (token !== null) {
          authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
      }
      return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];