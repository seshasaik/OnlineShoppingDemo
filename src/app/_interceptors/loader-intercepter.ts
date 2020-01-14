import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { LoadingSpinnerService } from '../global/loading-spinner/loading-spinner.service';

@Injectable()
export class LoaderIntercepter implements HttpInterceptor {

    private reqQueue: HttpRequest<any>[] = [];
    constructor(private loadingSprinnerService: LoadingSpinnerService) {
        console.log("Loader Interceptor initiated");
    }

    removeRequest(req: HttpRequest<any>): void {
        const reqIndx = this.reqQueue.indexOf(req);
        if (reqIndx != -1) {
            this.reqQueue.splice(reqIndx, 1);
        }
        this.loadingSprinnerService.isLoading.next(this.reqQueue.length > 0);
    }



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.reqQueue.push(req);
        this.loadingSprinnerService.isLoading.next(this.reqQueue.length > 0);

        return new Observable(observer => {
            const subscription = next.handle(req).subscribe((event) => {
                if (event instanceof HttpResponse) {
                    this.removeRequest(req);
                    observer.next(event)
                }

            }, (error) => {
                console.log(error);
                this.removeRequest(req);
                observer.error(error)
            }, () => {
                this.removeRequest(req);
                observer.complete();
            });

            return () => {
                this.removeRequest(req);
                subscription.unsubscribe()
            }
        })
    }
}
