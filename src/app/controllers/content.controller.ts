/**
 * 内容
 * @author Philip
 */
import { Context, controller, get, inject, provide } from 'midway'
import ContentService from '../services/content.service'


@provide()
@controller('/content')
export class ContentController {

  constructor(@inject() private userService: ContentService) {}

  @get('/:id', { middleware: ['authorizeMiddleware'] })
  public async getUser(ctx: Context): Promise<void> {
    const id =+ ctx.params.id
    const user = await this.userService.getUser({ id })

    ctx.body = user
  }

}