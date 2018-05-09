import {Body, Controller, Param, Post, Query, Req, Res} from "@nestjs/common";

@Controller('Parametros')
export class ParametrosController {

    @Post('recuperar/:id')
    recuperarParametros(
        @Req() request,
        @Res() response,
        @Param() paramParams,
        @Query() queryParams,
        @Body() bodyParams
    ) {
        const respuesta = {
            paramParams: paramParams,
            queryParams: queryParams,
            bodyParams: bodyParams,
        };
        console.log(respuesta);
        return response.send(respuesta)

    }

}