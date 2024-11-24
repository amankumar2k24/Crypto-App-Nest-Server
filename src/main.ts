import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());      //This sets up the ValidationPipe globally for the application, meaning all incoming requests will be automatically validated according to the rules defined in your DTOs.      
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
