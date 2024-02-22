import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {catchError, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Je suis intercepté");

    let monTokenDAmour = "ILoveAngular"

    const nouvelleReq = req.clone({
      headers: req.headers.set("Authorization", monTokenDAmour)
    })

    return next.handle(nouvelleReq)
    /*return next.handle(nouvelleReq).pipe(
    catchError((error: HttpErrorResponse)=>{
      console.log(error);
      return next(nouvelleReq);
    })
  );*/
  };
}
