const http = require ( "http" );
const hostname = "localhost" ;
const port = 3002 ;
const server = http.createServer((req, res) => {
	res.statusCode = 200 ;
	res.setHeader( "Content-Type" , "application/json" );
	res.end( '{ "message" : "Hello World " }' );
});

server.listen(port, hostname, () => {
	console .log( `Server running at http://${hostname}:${port}/` );
});