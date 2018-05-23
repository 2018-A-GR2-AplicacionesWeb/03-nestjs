import {Controller, Get, ReflectMetadata, UseGuards} from "@nestjs/common";
import {UsuarioGuard} from "./guards/usuario.guard";

@Controller('usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {

    @Get('mostrar')
    @ReflectMetadata('nombreDato','ValorM')
    mostrar() {
        return 'Ok mostrar';
    }
    @Get('crear')
    @ReflectMetadata('nombreDato','ValorC')
    crear() {
        return 'Ok crear';
    }
}