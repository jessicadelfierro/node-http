//import http module
const http = require('http')

//declare consts
const hostname = 'localhost';
const port = 3000;

//path module and fs module
const path = require('path');
const fs = require('fs');

//set up server
//creates a basic minimal server object using an existing http.server class, takes a request handler callback function as a parameter
//request handler takes 2 objects as parameters (request & response)
const server = http.createServer((req, res) => {
    //console log both url and http method
    console.log(`Request for ${req.url} by method ${req.method}`);

    //only want the server to respond to requests with the GET method
    if (req.method === 'GET') {
        //examine URL that was requested
        //local variable that's value is the contents of the request url
        let fileUrl = req.url;

        //send html.index page automatically if just hostname
        if (fileUrl === '/') {
            fileUrl = '/index.html';
        }

        //get absolute path of file that is requested and store in filePath
        const filePath = path.resolve('./public' + fileUrl);

        //server only grant requests for html files
        //create variable and set path.extname method to parse out extension from filePath
        const fileExt = path.extname(filePath);
        if (fileExt === '.html') {
            //check to see if the file exists on the server
            //takes 2 arguments, path we want to check and a callback that takes an error argument. if file is not accessible then an error object will be passed to err argument
            fs.access(filePath, err => {
                if (err) {
                    res.statusCode = 404; 
                    res.setHeader('Content-Type', 'text/html'); 
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
                    return; //so code after this is not executed
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');

                //actually send html file. using pipe method -- sending it over to the response object
                //piping the data from reading the file located at this file path to the response stream so that the response object can now access that data
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404; 
            res.setHeader('Content-Type', 'text/html'); 
            res.end(`<html><body><h1>Error 404: ${fileUrl} is not a HTML file</h1></body></html>`);
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html'); //sets content-type to text/html
        res.end(`<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`);
    }
});

//starts server
//third argument will be callback function that will be executed when the server starts up
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



/*
DELETED -- FROM INSIDE REQUEST HANDLER
    //req object gives us access to headers
    console.log(req.headers);

    //add status code property to the response object, 200 means everything is ok
    res.statusCode = 200;

    //set up header for the response object 
    //tells client what kind of data to expect in the response body, value for this header in second argument
    res.setHeader('Content-Type', 'text/html')

    //set up response body and close response stream
    res.end('<html><body><h1>Hello World!</h1></body></html>')
*/