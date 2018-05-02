import {Controller, Get} from "@nestjs/common";

@Controller('Pelicula')
export class AppPeliculaController {

    @Get('mostrarCartelera')
    mostrarCartelera() {
        return ['Thor', 'Capi', 'Spidey'];
    }
}