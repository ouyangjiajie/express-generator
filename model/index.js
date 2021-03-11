const MongoClient = require('mongodb')
//数据库地址
const url  = 'mongodb://localhost:27017'

//数据库名称
const dbName = 'project'


//连接数据库的方法
function connect(callback){
    MongoClient.connect(url,(err,client)=>{
        if(err){
            console.log('连接失败：',err);
        }
        console.log('连接成功');
        const db = client.db(dbName)
        //将数据库对象回调回去进行一系列操作
        typeof callback  === 'function' && callback(db)
        //数据库进行一些操作完成时候关闭数据库
        client.close()
    })
}

module.exports = {
    connect
}