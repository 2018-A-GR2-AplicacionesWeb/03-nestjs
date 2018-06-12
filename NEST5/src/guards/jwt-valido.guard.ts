import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs/index";

@Injectable()
export class JwtValidoGuard implements CanActivate {
    constructor(private _reflector: Reflector) {
    }

    canActivate(context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {

        const necesitaValidarse = this._reflector
            .get(
                'metodoAsegurado',
                context.getHandler()
            );
        if (necesitaValidarse) {
            const request = context
                .switchToHttp()
                .getRequest();
            const jwt = request.headers.auth;
            if (jwt) {

            } else {
                return false;
            }
        } else {
            return true;
        }

    }

}