// Create static Api using static json data form db.json

let fs=require('fs')
let http=require('http')

let server=http.createServer((req, res)=>{
    fs.readFile('db.json','utf-8', (err, data)=>{
       if(err) throw err;
       res.write(data);
       res.end();

    } )
})

server.listen(6700);
