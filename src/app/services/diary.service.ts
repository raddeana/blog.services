import { provide } from 'midway'
import { Diary } from '../models/diary.model'


@provide()
export default class DiaryService {

  /**
   * 读取用户信息
   */
  public async getUser(): Promise<Diary> {
    return {
      id: 1,
      user_name: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    }
  }

}
