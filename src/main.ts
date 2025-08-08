import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { momentFunc } from './moment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  momentFunc(); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
