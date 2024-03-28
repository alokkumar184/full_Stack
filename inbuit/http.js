// http use for Create a  server

let http=require('http');

// server need two things req and res ✈️
//Req- Means what pass to the server (params, query, body)
// res- what server response (means get from server)
let server=http.createServer(function(req, res) {
   res.write("<h1> This1  is node111 1111111server111 new server create </h1>");
   res.end();  // close the server
})

// here tell which port run server
// port-6777 and avoid 8080 port 
server.listen(6700)

// in the Bower open localhost:6777
// The prob in http server u can't create the route 
