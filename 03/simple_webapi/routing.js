const http = require('http');
const url = require('url');
//create server
const server = http.createServer((req,res)=>{
    //implement routing
    const pathName = req.url
    if(pathName==='/'){
        res.end('Home Page');
    }
    else if(pathName==='/overview'){
        res.end('This is OVErVIEW page');
    }else if (pathName==='/product'){
        res.end('This is PRODUCT page');
    }else{
        res.writeHead(404);
        res.end('Page not found!!');
    } 

});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request');
});