import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'web2018agr2.mysql.database.azure.com',
            port: 3306,
            username: 'profesor',
            password: 'Javascript1',
            database: 'mysql',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
            extra: {
                ssl: true
            }
        }),
        TypeOrmModule.forFeature([UsuarioEntity])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
