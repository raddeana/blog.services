import { provide } from 'midway'
import { Content } from '../models/content.model'


@provide()
export default class ContentService {

    /**
    * 读取用户信息
    */
    public async getUser(id: string): Promise<Content> {
        return {
            id,
            user_name: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com'
        }
    }
}
