import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import databaseConnection from './database/connection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const connection = await databaseConnection();
  connection.synchronize();
  await app.listen(3000, () => console.log('Server started at port 3000'));
}
bootstrap();
