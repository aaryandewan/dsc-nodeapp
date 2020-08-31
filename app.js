var http = require("http");

http.createServer(function (request, response) {
    jsonObject = {"menu": {  
        "id": "file",  
        "value": "File",  
        "popup": {  
          "menuitem": [  
            {"value": "New", "onclick": "CreateDoc()"},
            {"value": "Open", "onclick": "OpenDoc()"},  
            {"value": "Save", "onclick": "SaveDoc()"}  
          ]  
        }  
      }}
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(jsonObject));
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 }).listen(8081);

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');