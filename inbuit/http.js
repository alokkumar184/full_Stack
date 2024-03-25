// http use for Create a  server

let http=require('http');

// server need two things req and res ✈️
//Req- Means what pass to the server (params, query, body)
// res- what server response (means get from server)
let server=http.createServer(function(req, res) {
   res.write("<h1> This  is node server </h1>");
   res.end();  // close the server
})

// here tell which port run server
// port-6777 and avoid 8080 port 
server.listen(6777)

// in the Bower open localhost:6777