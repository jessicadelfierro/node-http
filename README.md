# node-http

# Part 1:
set up a basic HTTP server using the core http module, set up a basic request handler and start the server

# Part 2:
Serve static HTML files with the help of the path and fs core  modules

Learn to use Postman to test the server

# Notes
npm init command creates package.json file

http.createServer() creates a basic minimal server object using an exisiting http.server class. It takes a request handler callback function as a parameter

Request handler is called everytime the server receives a request. It takes 2 objects as parameters (request and response). We DO NOT create the response object ourselves, we receive it along with the incoming request, then we add data to the response and sent it back. Request and Response objects are special types of objects called streams. 

With streams, data is not transmitted all at once, but in chucks that are read piece by piece.