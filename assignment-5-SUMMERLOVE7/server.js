/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Min Ji Chang
 * Email: changmin@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var postData = require('./postData.json');
const { url } = require('inspector');
const { parse } = require('path');
console.log("== postData:", postData)

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({defaultLayout:'main', partialsDir: __dirname + '/views/partial/', layoutsDir: __dirname + '/views/layout/'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function(req, res, next){
  console.log(" --- home page requested")
  console.log("00000"+postData)

  //res.status(200).sendFile(__dirname + '/public/index.html')
  if(postData){

    res.status(200).render('postPage', {
      //return()
      postContents: postData
    })
  }else{
    //next();
  }
})

app.get('/posts/:n', function(req, res, next){

  var n = req.params.n;
  if(n < postData.length){
    var post = postData[n]
    console.log(" ---post:", post)
    res.status(200).render('postPage',{
     postContents:[post],
      single: true
    })
  }
  else{
    res.status(404).render('postPage', {
      badPage: true
    })
  }
 
})

app.get('*', function (req, res) {
  //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  res.status(404).render('postPage', {
    //path: req.url
    badPage: true
  })
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
