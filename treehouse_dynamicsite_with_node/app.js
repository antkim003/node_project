var http = require('http');
var router = require('./router.js');
//create a webserver
http.createServer(function(request, response) {
	router.home(request,response);
	router.user(request,response);
}).listen(3000);

console.log('server rnning at http://<workspace-url>/');

