import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as process from 'process';

@Injectable()
export class BimiService {
  private readonly account_ids = [
    process.env.E401,
    process.env.E402,
    process.env.E403,
    process.env.E404,
    process.env.E405,
    process.env.E406,
    process.env.E407,
    process.env.E408,
    process.env.E409,
    process.env.E410,
    process.env.E411,
    process.env.E412,
    process.env.E413,
  ];

  private readonly gliste_api_base = 'https://iqmeta.com/gliste/api/credit/';

  @Cron('0 0 1 * *')
  async add_floor_contribution(): Promise<string> {
    for (const account_id of this.account_ids) {
      const call = `${this.gliste_api_base}?email=${process.env.GLISTE_API_ACCOUNT}&apikey=${process.env.GLISTE_API_KEY}&account=${account_id}&amount=-${process.env.FLOOR_CONTRIBUTION}&text=Flurbeitrag`;
      try {
        await fetch(call);
      } catch (e) {
        throw new InternalServerErrorException(e);
      }
    }
    return 'OK';
  }
}
