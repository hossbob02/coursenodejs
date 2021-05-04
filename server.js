const http= require('http')
const server= http.createServer((req,res)=>{
        
        if(req.url=='/home'){
                res.statusCode=200
                res.write('welcome from home')
        }else if(req.url=='/contacte'){
                res.statusCode=200
                res.write('welcome from contact')
        }else if(req.url=='/aboute'){
                res.statusCode=200
                res.write(process.env.NODE_ENV)
        }else{
                res.statusCode=200
              res.write('not found')  
        }

        res.end()
        
})

server.listen(5000,()=>{console.log('server run with port 5000')})