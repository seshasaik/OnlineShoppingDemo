import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http"
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return next.handle(req).pipe(catchError((error: any) => {
            if (error.status === 401) {
                this.authService.logOut();
                location.reload(true);
            }

            
            return throwError(error);
        }))
        
    }

}