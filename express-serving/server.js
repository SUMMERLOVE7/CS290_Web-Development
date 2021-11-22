var express = require('express')
var logger = require('./logger')

var app = express()

app.use(logger)

//아래 function : middleware function
app.use(function(req, res, next){
    console.log("== Request received")
    console.log("--- req.url:", req.url)
    console.log("--- req.method: ", req.method)
    //아래 두개 중에 하나는 무조건 해야함
    next()
    //res.send()

})

app.use(express.static('public'))

app.use(function(req, res, next){
    console.log(" --- second middleware")
    next()
    //res.send()
})

app.use(function(req, res, next){
    console.log(" --- third middleware")
    next()
    //res.send()
})

app.get('/about', function(req, res, next){
    console.log(" --- about page requested")
    //res.status(200)
    //res.send("About page")
    //res.send("<html><body><h1>About page</h1></body></html>")
    res.status(200).send("<html><body><h1>About page</h1></body></html>")
})
//app.post()
//app.patch()
//app.put()
//app.delete()

app.get('/', function(req, res, next){
    console.log(" --- home page requested")
    res.status(200).sendFile(__dirname + '/public/index.html')
})

var availablePerople = [
    'luke',
    'leia',
    'rey',
    'finn',
    'r2d2'
]

app.get('/people/:person', function(req, res, next){
    console.log(" --- Person page requested")
    console.log(" --- req.params.person:", req.params.person)
    var person = req.params.person
    if(availablePerople.indexOf(person) !== -1){
        res.status(200).sendFile(__dirname+'/public/people/'+person+'.html')
    }else{
        next()
    }
    
    //next()
})

//~~~~.com/<user>/status/<id>
app.get('/:user/status/:id', function(req, res, next){
    console.log(" --- Tweet page requested")
    console.log(" --- req.params:", req.params)
    next()
})

//위에 있는 주소 중 해당하는 게 없고 나머지를 *
//app.get('c*t', function(~~~~))써도 됨.
app.get('*', function(req, res, next){
    console.log(" ---- 404!! ")
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(8000, function(){
    console.log("== Server is listening on port 8000")
})

/**
 * url & method   -------------> content
 *                   routing
 */

/**
 * <h1>
 *      Hello {{who}}
 * </h1>
 * 
 *      {                                   <h1>
 *          who: "Cs290"          =====>        Hello CS290
 *      }                                   </h1>
 */