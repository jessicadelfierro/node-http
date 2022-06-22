//import http module
const http = require('http')

//declare consts
const hostname = 'localhost';
const port = 3000;

//set up server
//creates a basic minimal server object using an existing http.server class, takes a request handler callback function as a parameter
//request handler takes 2 objects as parameters (request & response)
const server = http.createServer((req, res) => {
    //req object gives us access to headers
    console.log(req.headers);

    //add status code property to the response object, 200 means everything is ok
    res.statusCode = 200;

    //set up header for the response object 
    //tells client what kind of data to expect in the response body, value for this header in second argument
    res.setHeader('Content-Type', 'text/html')

    //set up response body and close response stream
    res.end('<html><body><h1>Hello World!</h1></body></html>')
});

//start server
//third argument will be callback function that will be executed when the server starts up
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}/`);
});