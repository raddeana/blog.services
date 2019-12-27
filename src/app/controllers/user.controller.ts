/**
 * 用户信息
 * @author Philip
 */
import { Context, controller, get, inject, provide } from 'midway'
import UserService from '../services/user.service'

@provide()
@controller('/user')
export class UserController {

    constructor(@inject() private userService: UserService) {}

    @get('/:id', { middleware: ['authorizeMiddleware'] })
    public async getUser(ctx: Context): Promise<void> {
        const id =+ ctx.params.id
        const user = await this.userService.getUser({ id })

        ctx.body = user
    }

    @post('/authorize')
    public async authorize (ctx: Context): Promise<void> {
        const token =+ ctx.params.token
    }

}

