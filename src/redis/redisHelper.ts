import redis from 'redis'
import config from './config'

const client = redis.createClient(config.port, config.url)

client.on("error", function (err: any): void {
    console.log('redis connect err', err)
})

client.on('connect', function (): void {
    console.log('redis connect success');
})

// 验证redis
client.auth(config.password);

class RedisHelper {
    setString (key: String, value: String, expire: number): Promise<any> {
        return new Promise((resolve, reject) : void {
            client.set(key, value, function (err: any, result: any): void {

                if (err) {
                    console.log(err);
                    reject(err);
                }

                if (!isNaN(expire) && expire > 0) {
                    client.expire(key, expire);
                }

                resolve(result)
            })
        })
    }

    
    getString (key: any): Promise<any> {
        return new Promise((resolve: Function, reject: Function) :void {
            client.get(key, function (err: any, result: any): void {
                if (err) {
                    console.log(err);
                    reject(err)
                }

                resolve(result)
            })
        })
    }
}

export default new RedisHelper()
