import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet({}));
  await app.listen(process.env.PORT);
  Logger.verbose(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
