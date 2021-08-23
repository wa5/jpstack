const http=require('http')



const server=http.createServer((req,res)=>{

    if(req.url=='/akshita'){
        res.write('<h1>hello</h1>')
        res.end()
    }else if(req.url=='/vinoth'){
        res.write('<h1>hello im vinode</h1>')
        res.end()
    }else if(req.url=='/'){
        res.write('<h1>welcome to server</h1>')
        res.end()
    }
})
server.listen(8089,()=>{console.log("server started on 8089")})