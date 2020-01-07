import { provide } from 'midway'
import { Diary } from '../models/diary.model'


@provide()
export default class DiaryService {

  /**
   * 读取用户信息
   */
  public async getUser(id: string): Promise<Diary> {
    return {
      id,
      user_name: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    }
  }

}
