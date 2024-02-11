import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as process from 'process';

@Injectable()
export class BimiService {

  private readonly account_ids = [
    Number(process.env.E401),
    Number(process.env.E402),
    Number(process.env.E403),
    Number(process.env.E404),
    Number(process.env.E405),
    Number(process.env.E406),
    Number(process.env.E407),
    Number(process.env.E408),
    Number(process.env.E409),
    Number(process.env.E410),
    Number(process.env.E411),
    Number(process.env.E412),
    Number(process.env.E413)
  ]

  private readonly gliste_api_base = "https://iqmeta.com/gliste/api/credit/"

  async add_floor_contribution(): Promise<string> {
    for (const account_id of this.account_ids) {
      const call = `${this.gliste_api_base}?email=${process.env.GLISTE_API_ACCOUNT}&apikey=${process.env.GLISTE_API_KEY}&account=${account_id}&amount=${process.env.FLOOR_CONTRIBUTION}&text=Flurbeitrag`
      try {
        await fetch(call)
      } catch (e) {
        console.error(e)
        throw new InternalServerErrorException(e)
      }
    }
    return "OK"
  }
}