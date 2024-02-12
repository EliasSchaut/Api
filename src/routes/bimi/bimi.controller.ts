import { Controller, Post } from '@nestjs/common';
import { BimiService } from '@/routes/bimi/bimi.service';

@Controller('bimi')
export class BimiController {
  constructor(private readonly bimi_service: BimiService) {}

  @Post('floorcon')
  async add_floor_contribution(): Promise<string> {
    return this.bimi_service.add_floor_contribution();
  }
}
