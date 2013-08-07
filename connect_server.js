/*
 * Simple Node server for testing DocuSign Connect
 */

var     sys = require("sys"),
        my_http = require("http");
        
my_http.createServer(function(request,response){
    console.log("Request received\n");
	console.log("method: \n", request.method, "\n");
	console.log("url: \n", request.url, "\n");	
	console.log("body: \n", request.body, "\n");		
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.write("Hello DocuSign Connect Server!\n");
	response.end();
}).listen(80);

sys.puts("Server Running on port 80...");	
