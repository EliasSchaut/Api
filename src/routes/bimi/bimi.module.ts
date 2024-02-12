import { Module } from '@nestjs/common';
import { BimiController } from '@/routes/bimi/bimi.controller';
import { BimiService } from '@/routes/bimi/bimi.service';

@Module({
  providers: [BimiService],
  controllers: [BimiController],
})
export class BimiModule {}
