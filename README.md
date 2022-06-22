# node-http

# Part 1:
set up a basic HTTP server using the core http module, set up a basic request handler and start the server

# Part 2:
Serve static HTML files with the help of the path and fs core modules; extend simple http server so that it's capable of serving static files that we have stored in a directory

Learn to use Postman to test the server

# Notes
npm init command creates package.json file

http.createServer() creates a basic minimal server object using an exisiting http.server class. It takes a request handler callback function as a parameter

Request handler is called everytime the server receives a request. It takes 2 objects as parameters (request and response). We DO NOT create the response object ourselves, we receive it along with the incoming request, then we add data to the response and sent it back. Request and Response objects are special types of objects called streams. 

With streams, data is not transmitted all at once, but in chucks that are read piece by piece.

path and fs module are core modules in node -- no need to install anything

if request came in and it was just to the hostname such as localhost, without specifying a url beyond that, req.url property will contain just '/'

path.resolve() method converts from a relative path to an absolute path

fs.access() method lets us know if a file is accessible. Takes 2 arguments, the path that we want to check, then a callback that takes an error argument

res.createReadStream() method takes care of reading the contents of the file that it's given in small chunks rather than all that once so that it doesn't load the whole file into memory, just a chunk at a time (similar to lazy loading in react native); creates a stream object

pipe method to send information from one to the other

# Postman
used to send test http requests to our server and to view the response from the server.

plus sign to start a new request, it will be set as an http GET request by default

node http server needs to be running