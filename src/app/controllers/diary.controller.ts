/**
 * 用户信息
 * @author Philip
 */
import { Context, controller, get, inject, provide } from 'midway'
import DiaryService from '../services/diary.service'


@provide()
@controller('/diary')
export class DiaryController {

  constructor(@inject() private diaryService: DiaryService) {}

  @get('/:id', { middleware: ['authorizeMiddleware'] })
  public async getUser(ctx: Context): Promise<void> {
    const id =+ ctx.params.id
    const user = await this.diaryService.getUser({ id })

    ctx.body = user
  }

}

