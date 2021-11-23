/*
 * Write your server code in this file.
 *
 * name: 
 * email: 
 */


var http = require('http')
//const { normalize } = require('path')
var PORT = process.env.PORT || 3000
const fs = require('fs')

console.log(__dirname)

var server = http.createServer(function(req, res){
    //res.statusCode = 200;

    var url = req.url;
    console.log(url)
    var i = 1
    console.log("------" + i)
    

    if(req.url == '/index.js'){
        res.statusCode = 200;
        url = '\\public\\index.js'
        res.setHeader('Content-Type', 'application/javascript');
    }
    else if(req.url == '/style.css'){
        res.statusCode = 200;
        url = '\\public\\style.css'
        res.setHeader('Content-Type', 'text/css');
    }
    else if(req.url == '/404.html'){
        res.statusCode = 404;
        url = '\\public\\404.html'
        res.setHeader('Content-Type', 'text/html');
    }
    else if(req.url == '/benny.jpg'){
        res.statusCode = 200;
        url = '\\public\\benny.jpg'
        res.setHeader('Content-Type', 'image/jpeg');
    }
    else if(req.url == '/' || '/index.html'){
        res.statusCode = 200;
        url = '\\public\\index.html';
        res.setHeader('Content-Type', 'text/html');
    }
    else{
        url = '\\public\\404.html'
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        console.log(res.statusCode)
    }
    i = i+1;
    res.end(fs.readFileSync(__dirname + url))
    
})

server.listen(PORT, ()=>{
    console.log(`Server Running on : http://localhost:${PORT}/`);
})
/*
server.get('/:id', (req, res) =>{
    var id = req.params.id;

    fs.readdir('')
})
fs.readFile('/:/', (err, data) =>{
    if(err) throw err;
    console.log(data);
})
*/

var fileData
fs.readFile('index.js', 'utf8', function (err, contents) {
    if(err){
        console.log("== file contents:", contents)
        fileData = contents
    }

})
