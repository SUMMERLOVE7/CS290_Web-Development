var http = require('http')

var server = http.createServer(function(req, res){
    console.log("== Request received")
    console.log("  ---method: ", req.method)
    console.log("  ---url: ", req.url)
    console.log("  ---headers: ", req.headers)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    res.write("<html>")
    res.write("<body>")
    res.write("<h1>Hello world</h1>")
    res.write("<p>You asked for the url: "+req.url + "</p>")
    res.write("</body>")
    res.write("</html>")

    res.end()
})

server.listen(8000, function(){
    console.log("== Server is listening on port 8000")
})

//http://oregonstate.edu/about
//Protocol    Host        Path