import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvValidationSchema } from '@/common/env.validation';
import { BimiModule } from '@/routes/bimi/bimi.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: EnvValidationSchema,
    }),
    BimiModule,
  ],
})
export class AppModule {}
