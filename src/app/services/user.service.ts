/**
 * 用户服务
 * @author Philip 
 */

import { provide } from 'midway'
import { UserInfo } from '../models/user.model'

@provide()
export default class UserService {

    /**
     * 读取用户信息
     */
    public async getUser(id: string): Promise<UserInfo> {
        return {
            id,
            user_name: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com'
        }
    }

    public async authorize (username: string, password: string): Promise<Boolean> {
        return true
    }

}
