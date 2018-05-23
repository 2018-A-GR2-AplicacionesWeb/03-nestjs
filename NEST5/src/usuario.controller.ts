import {Controller, Get} from "@nestjs/common";

@Controller('usuario')
export class UsuarioController {
    @Get('mostrar')
    mostrar() {
    }
    @Get('crear')
    crear() {
    }
}