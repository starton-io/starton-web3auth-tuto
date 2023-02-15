import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  // Validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Cors
  app.enableCors();

  await app.listen(3001);
}
void bootstrap();
