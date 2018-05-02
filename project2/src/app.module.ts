import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [], // Importar otros modulos
  controllers: [AppController],
  components: [], // Componentes
})
export class AppModule {}
