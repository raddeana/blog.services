import { provide } from 'midway'
import { UserInfo } from '../models/user.model'


@provide()
export default class UserService {

    /**
     * 读取用户信息
     */
    public async getUser(): Promise<UserInfo> {
        return {
            id: 1,
            user_name: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com'
        }
    }

}
