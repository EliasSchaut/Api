import { Module } from '@nestjs/common';
import { BimiController } from './bimi.controller';
import { BimiService } from './bimi.service';

@Module({
  providers:[BimiController, BimiService]
})
export class BimiModule {}
