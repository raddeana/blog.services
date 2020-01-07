/**
 * 用户 controller
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
        const id = ctx.params.id
        const user = await this.userService.getUser(id)

        ctx.body = user
    }

    @post('/authorize')
    public async authorize (ctx: Context): Promise<void> {
        const { username, password } = ctx.params
        const result = await this.userService.authorize(username, password)

        if (!result) {
            ctx.status = 401
            ctx.body = {
                message: '用户名或者密码错误'
            }
        }
    }

}

