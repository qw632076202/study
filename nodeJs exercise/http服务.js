var http =  require('http')
var fs = require('fs')
var path = require('path')

// 返回一个服务器实例
var server = http.createServer()

// 收到客户端请求时做的事情，监听客户端请求，任何客户端的请求都会触发这个事件
server.on('request',function(request,response){
    console.log('收到客户端的请求了')
    // console.log('请求路径是：',request.url)
    if(request.url=='/login'){
        // response.write()
        response.setHeader('Content-type','text/plain; charset=utf-8')
        response.end('登录界面')      
    }else if(request.url=='/re'){re
        response.write('注册界面')
        response.end()             
    }else if(request.url=='/'){
        fs.readFile(path.join(__dirname,'./resource/图书管理案例1.html'),function(error,data){
            response.setHeader('Content-type','text/html; charset=utf-8')
            response.end(data.toString())
        });
    }else{
        console.log('请求我的IP地址是：',request.socket.remoteAddress)
        console.log('请求我的端口号是：',request.socket.remotePort)   
        response.write('404 not found')
        response.end()          
    }
})

// 绑定端口号,启动服务器
server.listen(3000,function(){
    console.log('server is running.....http://127.0.0.1:3000')
})
