console.log("Hello world!!")
console.log("== __dirname:", __dirname)
console.log("== __filename:", __filename)
// console.log("== process:", process)

// var nameOfVariable = "value of variable"
console.log("== process.env:", process.env)
console.log("== process.env.USER:", process.env.USER)
console.log("== process.env.DB_USERNAME:", process.env.DB_USERNAME)

const fs = require('fs')
var fileData
fs.readFile('hello.js', 'utf8', function (err, contents) {
    if(err){
        console.log("== file contents:", contents)
        fileData = contents
    }

})

//synchronous : file read 후 finish 까지 가는 동안 아무것도 안함   -------->|read - - - - - -|finish------>
//asynchronous : ----------->|read------------|------>
//                                            |handler(Callback)
//                           -----------------*Event
//                                             finish

console.log("=== This is after fs.readFile()")
console.log("  -- fileData: ", fileData)
console.log("\n\n\n\n")

var synchronousContents = fs.readFileSync('hello.js', 'utf8')
console.log("=== synchronous file contents: ", synchronousContents)

//HTTP : communication protocol. res, req
//Request - Request Line(HTTP method, URL), - Request Headers, - Body
//HTTP Methods
//-GET
//-POST
//-PATCH, PUT, DELETE
//Response - Status Line, Response headers, Body
//4xx : client error, 403 : forbidden, 404 : not found, 2xx-200 : ok, 5xx : server error, 3xx : 


