import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";

@Injectable()
export class UsuarioGuard implements CanActivate{

    canActivate(
        context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {

        return false;

    }

}