import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  await app.listen(3000, () => {
    console.log('postgres app listen to port 3000');
  });
}
bootstrap();
