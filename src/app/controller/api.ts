import { controller, provide, inject, Context, get } from 'midway'
import { IApiService } from '../../interface'
@provide()
@controller('/api')
export class Api {
  @inject()
  ctx: Context
  @inject('ApiService')
  service: IApiService
  @get('/getIndexData')
  async index() {
    try {
      const data = await this.service.index()
      this.ctx.send(data.data)
    } catch (error) {
      this.ctx.logger.error(`Page Controller renderToStream Error`, error)
    }
  }
}
