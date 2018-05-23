import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";

@Injectable()
export class UsuarioGuard implements CanActivate {

    canActivate(
        context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {
        const request = context
            .switchToHttp()
            .getRequest();
        console.log('Request', request);
        console.log('Cabeceras', request.headers);

        return false;

    }

}