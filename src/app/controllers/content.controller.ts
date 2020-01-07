/**
 * 内容 controller
 * @author Philip
 */
import { Context, controller, get, inject, provide } from 'midway'
import ContentService from '../services/content.service'


@provide()
@controller('/content')
export class ContentController {

  constructor(@inject() private contentService: ContentService) {}

  @get('/:id', { middleware: ['authorizeMiddleware'] })
  public async getUser(ctx: Context): Promise<void> {
    const id = ctx.params.id
    const user = await this.contentService.getUser(id)

    ctx.body = user
  }

}