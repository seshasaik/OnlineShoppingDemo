import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {
    token: string = "";
    constructor(private authservice: AuthService) {
        this.authservice.currentUser.subscribe((user) => {
            this.token = user.token;
        })
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('login') === -1 || req.url.indexOf('sign-up') === -1 || req.url.indexOf('forget-password') === -1) {
            if (this.token)
                req = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${this.token}`

                    }
                })
        }


        return next.handle(req);
    }
}
