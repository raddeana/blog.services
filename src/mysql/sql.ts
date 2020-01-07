import mysql = require('mysql')
import config from './config'

const connection = mysql.createConnection(config)
 
// 连接数据库
connection.connect()

export default connection