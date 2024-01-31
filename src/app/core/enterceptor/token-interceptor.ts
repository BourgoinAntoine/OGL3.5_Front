import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserTokenDTO } from "../models/user/user-token-dto";

export class TokenInterceptor implements HttpInterceptor {
    constructor(){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> 
    {
        let currentUser = localStorage.getItem("currentUser");
        let token;
        if (currentUser) {
            let tokenModel : UserTokenDTO = JSON.parse(currentUser);
            token = tokenModel.token;
            
        }
        if (token) {
            if (token !=="") {
                let clone = req.clone({
                    setHeaders: {'Authorization':'Bearer'+ token}
                })
                return next.handle(clone);
                
            }
            
        }
        return next.handle(req);
        
    }
}
